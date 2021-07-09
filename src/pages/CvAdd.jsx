import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Dropdown,
  TextArea,
  Card,
  Form,
  Input,
} from "semantic-ui-react";
import CvService from "../Services/cvService";
import DepartmentService from "../Services/departmentService";
import ForeignLanguageService from "../Services/foreignLanguageService";
import SchoolService from "../Services/schoolService";
import JobExperienceService from "../Services/jobExperienceService";
import { toast } from "react-toastify";

export default function CvAdd() {
  let cvService = new CvService();

  const CvUpdateSchema = Yup.object().shape({
    // photo: Yup.string().nullable().required("Bu alanın doldurulması zorunludur"),
    gitHubLink: Yup.string().required("Bu alanın doldurulması zorunludur"),

    linkedLink: Yup.string().required("Bu alanın doldurulması zorunludur"),
    description: Yup.string().required("Bu alanın doldurulması zorunludur"),
    foreignLanguageId: Yup.string().required("Posizyon sayısı zorunludur"),
    jobExperienceId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    schoolId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    departmentId: Yup.string().required("Bu alanın doldurulması zorunludur"),
  });

  const formik = useFormik({
    initialValues: {
      photo: "",
      gitHubLink: "",
      linkedLink: "",
      description: "",
      foreignLanguageId: "",
      jobExperienceId: "",
      schoolId: "",
      jobSeekerId: "",
      departmentId: "",
    },
    validationSchema: CvUpdateSchema,
    onSubmit: (values) => {
      values.jobSeekerId = "7";
      values.cvId = "9";
      cvService.postCv(values).then((result) => console.log(result.data.data));
      toast.success("Cv Has Been Added");
      console.log(values.photo);
      cvService.postCvPhoto(values.photo);
    },
  });

  const [departments, setDepartment] = useState([]);
  const [foreignLanguages, setForeignLanguage] = useState([]);
  const [schools, setSchool] = useState([]);
  const [jobExperiences, setJobExperience] = useState([]);

  useEffect(() => {
    let departmentService = new DepartmentService();
    let foreignLanguageService = new ForeignLanguageService();
    let schoolService = new SchoolService();
    let jobExperienceService = new JobExperienceService();

    departmentService
      .getDepartment()
      .then((result) => setDepartment(result.data.data));
    foreignLanguageService
      .getAll()
      .then((result) => setForeignLanguage(result.data.data));
    schoolService.getAll().then((result) => setSchool(result.data.data));
    jobExperienceService
      .getAll()
      .then((result) => setJobExperience(result.data.data));
  }, []);

  const departmentOption = departments.map((department, index) => ({
    key: index,
    text: department.departmentName,
    value: department.id,
  }));
  const foreignLanguageOption = foreignLanguages.map(
    (foreignLanguage, index) => ({
      key: index,
      text: foreignLanguage.languageName,
      value: foreignLanguage.id,
    })
  );
  const schoolOption = schools.map((school, index) => ({
    key: index,
    text: school.schoolName,
    value: school.id,
  }));
  const jobExperienceOption = jobExperiences.map((jobExperience, index) => ({
    key: index,
    text: jobExperience.jobName,
    value: jobExperience.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Card fluid>
        <Card.Content header="Cv Ekle" />
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field style={{ marginBottom: "1rem" }}>
              <label>Bölümler</label>
              <Dropdown
                clearable
                item
                placeholder="Bölümler"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "departmentId")
                }
                onBlur={formik.onBlur}
                id="departmentId"
                value={formik.values.departmentId}
                options={departmentOption}
              />
              {formik.errors.departmentId && formik.touched.departmentId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.departmentId}
                </div>
              )}
            </Form.Field>

            <Form.Field>
              <label>Diller</label>
              <Dropdown
                clearable
                item
                placeholder="Diller"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "foreignLanguageId")
                }
                onBlur={formik.onBlur}
                id="foreignLanguageId"
                value={formik.values.foreignLanguageId}
                options={foreignLanguageOption}
              />
              {formik.errors.foreignLanguageId &&
                formik.touched.foreignLanguageId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.foreignLanguageId}
                  </div>
                )}
            </Form.Field>

            <Form.Field>
              <label>Okuduğu Okullar</label>
              <Dropdown
                clearable
                item
                placeholder="Okul"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "schoolId")
                }
                onBlur={formik.onBlur}
                id="schoolId"
                value={formik.values.schoolId}
                options={schoolOption}
              />
              {formik.errors.schoolId && formik.touched.schoolId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.schoolId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <label>iş Deneyimi</label>
              <Dropdown
                clearable
                item
                placeholder="iş Denemeleriniz"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "jobExperienceId")
                }
                onBlur={formik.onBlur}
                id="jobExperienceId"
                value={formik.values.jobExperienceId}
                options={jobExperienceOption}
              />
              {formik.errors.jobExperienceId &&
                formik.touched.jobExperienceId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.jobExperienceId}
                  </div>
                )}
            </Form.Field>
            <Form.Field>
              <label>Description </label>
              <TextArea
                placeholder="Description..."
                style={{ minHeight: 100 }}
                error={Boolean(formik.errors.description).toString()}
                value={formik.values.description}
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.description && formik.touched.description && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.description}
                </div>
              )}
            </Form.Field>

            <Form.Field>
              <label>GitHub linki </label>
              <TextArea
                placeholder="GitHub Url"
                style={{ minHeight: 10 }}
                error={Boolean(formik.errors.gitHubLink).toString()}
                value={formik.values.gitHubLink}
                name="gitHubLink"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.gitHubLink && formik.touched.gitHubLink && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.gitHubLink}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <label>Linkedin linki </label>
              <TextArea
                placeholder="Linkedin Url"
                style={{ minHeight: 10 }}
                error={Boolean(formik.errors.linkedLink).toString()}
                value={formik.values.linkedLink}
                name="linkedLink"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.linkedLink && formik.touched.linkedLink && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.linkedLink}
                </div>
              )}
            </Form.Field>
            <Button
              content="Güncelle"
              labelPosition="right"
              icon="add"
              positive
              type="submit"
              style={{ marginLeft: "20px" }}
            />
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
