import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";

import JobAdvertisementService from "../Services/jobAdvertisementService";

import WaysOfWorkService from "../Services/WaysOfWorkService";
import JobService from "../Services/jobService";
import WorkingTimeService from "../Services/WorkingTimeService";
import CityService from "../Services/cityService";




export default function JobAd() {

   let jobAdService = new JobAdvertisementService();

  const JobAdvertAddSchema = Yup.object().shape({
    
    deadline: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
    description: Yup.string().required("Bu alanın doldurulması zorunludur"),
    // jobId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workingTimeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    wayOfWorkingId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    numberOfOpenPositions: Yup.string().required("Posizyon sayısı zorunludur").min(1,"Posizyon sayısı 1 den küçük olamaz"),
    cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    salaryMin: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur"),
    salaryMax: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur")
  });


  const formik = useFormik({
    initialValues: {
      description: "",
      jobId: "",
      workingTimeId: "",
      wayOfWorkingId: "",
      numberOfOpenPositions: "",
      cityId: "",
      salaryMin: "",
      salaryMax: "",
      employerId:"",
      deadline:"",
    },
    validationSchema: JobAdvertAddSchema,
    onSubmit: (values) => {
      values.employerId =4 ;
      jobAdService.add(values).then((result) => console.log(result.data.data));
      alert("İş ilanı eklendi personelin onayı ardından listelenecektir");
      console.log(values)
      // history.push("/jobads");
      
    }
  });

  const [workTimes, setWorkTimes] = useState([]);
  const [workPlaces, setWorkPlaces] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let workTimeService=new WorkingTimeService();
    let workPlaceService = new WaysOfWorkService();
    let cityService=new CityService();
    let jobPositionService = new JobService();

    workTimeService.getAll().then((result) => setWorkTimes(result.data.data));
    workPlaceService.getAll().then((result) => setWorkPlaces(result.data.data));
         cityService.getAll().then((result) =>setCities(result.data.data));
    jobPositionService.getJobs().then((result) => setJobPositions(result.data.data));
  }, []);

  const workTimeOption = workTimes.map((workTime, index) => ({
    key: index,
    text: workTime.time,
    value: workTime.id,
  }));
  const workPlaceOption = workPlaces.map((workPlace, index) => ({
    key: index,
    text: workPlace.working,
    value: workPlace.id,
  }));
  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));
  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.jobName,
    value: jobPosition.id,
  }));
  
  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  }

  return (
    <div>
      <Card fluid>
      <Card.Content header='İş ilanı Ekle' />
      <Card.Content>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field style={{marginBottom: "1rem"}}>
          <label>İş Posisyonu</label>
        <Dropdown
          clearable
          item
          placeholder="İş pozisyonu"
          search
          selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "jobId")
          }
          onBlur={formik.onBlur}
          id="jobId"
          value={formik.values.jobId}
          options={jobPositionOption}
          />
          {formik.errors.jobId && formik.touched.jobId &&(
            <div className={"ui pointing red basic label"}>
              {formik.errors.jobId}
            </div>
          )}
          </Form.Field>
          
          <Form.Field>
            <label>Şehir</label>
            <Dropdown
              clearable
              item
              placeholder="Şehir"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "cityId")
              }
              onBlur={formik.onBlur}
              id="cityId"
              value={formik.values.cityId}
              options={cityOption}
            />
            {formik.errors.cityId && formik.touched.cityId && (
              <div className={"ui pointing red basic label"}>
                {formik.errors.cityId}
              </div>
            )}
          </Form.Field>

          <Form.Field>
          <label>Çalışma yeri</label>
          <Dropdown
                  clearable
                  item
                  placeholder="Çalışma yeri"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "wayOfWorkingId")
                  }
                  onBlur={formik.onBlur}
                  id="wayOfWorkingId"
                  value={formik.values.wayOfWorkingId}
                  options={workPlaceOption}
                />
                {formik.errors.wayOfWorkingId && formik.touched.wayOfWorkingId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.wayOfWorkingId}
                  </div>
                )}
          </Form.Field>
          <Form.Field>
          <label>Çalışma Süresi</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Süresi"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workingTimeId")
                  }
                  onBlur={formik.onBlur}
                  id="workingTimeId"
                  value={formik.values.workingTimeId}
                  options={workTimeOption}
                />
                {formik.errors.workingTimeId && formik.touched.workingTimeId && (
                  <div className={"ui pointing red basic label"}>{formik.errors.workingTimeId}</div>
                )}
              </Form.Field>
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Maaş aralığı MİNİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MİNİMUM"
                  value={formik.values.salaryMin}
                  name="salaryMin"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.salaryMin && formik.touched.salaryMin && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.salaryMin}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Maaş aralığı MAKSİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MAKSİMUM"
                  value={formik.values.salaryMax}
                  name="salaryMax"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.salaryMax && formik.touched.salaryMax && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.salaryMax}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Açık Posisyon sayısı</label>
                <Input
                  style={{ width: "100%" }}
                  id="numberOfOpenPositions"
                  name="numberOfOpenPositions"
                  error={Boolean(formik.errors.numberOfOpenPositions)}
                  onChange={formik.handleChange}
                  value={formik.values.numberOfOpenPositions}
                  onBlur={formik.handleBlur}
                  type="number"
                  placeholder="Açık Posisyon sayısı"
                />
                {formik.errors.numberOfOpenPositions && formik.touched.numberOfOpenPositions && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.numberOfOpenPositions}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Son başvuru tarihi</label>
                <Input
                  style={{ width: "100%" }}
                  type="date"
                  error={Boolean(formik.errors.deadline)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "deadline")
                  }
                  value={formik.values.deadline}
                  onBlur={formik.handleBlur}
                  name="deadline"
                  placeholder="Son başvuru tarihi"
                />
                {formik.errors.deadline && formik.touched.deadline && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.deadline}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <label>Açıklama</label>
                <TextArea
                  placeholder="Açıklama"
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
              <Button
                content="Ekle"
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