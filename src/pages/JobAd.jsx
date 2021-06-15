import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Header, Icon } from "semantic-ui-react";
import JobAdvertisementService from "../Services/jobAdvertisementService";

export default function JobAd() {
  // const validationSchema = Yup.object({
  //   maxSalary: Yup.number().required("Zorunlu Alan"),
  //   minSalary: Yup.number().required("Zorunlu Alan"),
  //   description: Yup.string().required("Zorunlu Alan"),
  //   // wayOfWorkingWorking: Yup.number().required("Zorunlu Alan"),
  //   // workingTimeTime: Yup.number().required("Sayı giriniz"),
  //   // jobJobname: Yup.string().required("Zorunlu Alan"),
  //   // deadline: Yup.number().required("Zorunlu Alan"),
  //   // employerId: Yup.number().required("Zorunlu Alan"),
  //   // cityId: Yup.number().required("Zorunlu Alan"),
  //   // numberOfOpenPositions: Yup.number().required("Sayı giriniz"),
  // });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
     
      description: "",
      jobJobId: "",
      workingTimeId: "",
      wayOfWorkingId: "",
      numberOfOpenPositions: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
    
    },
    // validationSchema,
    onSubmit: (values) => {
      let jobAdvertisementService=new JobAdvertisementService()
      jobAdvertisementService.add(values)
      console.log(values)
    },
  });

  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="users" circular />
        <Header.Content>İş İlanı Ekle</Header.Content>
      </Header>

      <form onSubmit={handleSubmit}>
        <Form>
          <Form.Field>
            <input
              type="text"
              name="workingTimeTime"
              placeholder="Çalışma Saatleri"
              onChange={handleChange}
              values={values.workingTimeTime}
            />
            {/* {errors.workingTimeTime ? errors.workingTimeTime : null} */}
          </Form.Field>

          <Form.Field>
            <input
              type="text"
              name="minSalary"
              placeholder="max. Ücret"
              onChange={handleChange}
              values={values.maxSalary}
            />
            {/* {errors.maxSalary ? errors.maxSalary : null} */}
          </Form.Field>

          <Form.Field>
            <input
              type="text"
              name="minSalary"
              placeholder="Min. Ücret"
              onChange={handleChange}
              values={values.minSalary}
            />
            {/* {errors.minSalary ? errors.minSalary : null} */}
          </Form.Field>

          <Form.Field>
            <input
              type="text"
              name="description"
              placeholder="İş Açıklaması"
              onChange={handleChange}
              values={values.description}
            />
            {/* {errors.description ? errors.description : null} */}
          </Form.Field>

          <Form.Field>
            <input
              type="text"
              name="wayOfWorkingId"
              placeholder="Çalışma Şekli"
              onChange={handleChange}
              values={values.wayOfWorkingId}
            />
            {/* {errors.wayOfWorkingId ? errors.wayOfWorkingId : null} */}
          </Form.Field>

          <Form.Field>
            <input
              type="text"
              name="jobJobId"
              placeholder="İş id"
              onChange={handleChange}
              values={values.jobJobId}
            />
            {/* {errors.jobJobname ? errors.jobJobname : null} */}
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              name="deadline"
              placeholder="Son tarih"
              onChange={handleChange}
              values={values.deadline}
            />
            {/* {errors.deadline ? errors.deadline : null} */}
          </Form.Field>

          {/* <input
    type="text"
    name=" employerId"
    placeholder="İş Veren"
    onChange={handleChange}
    values={values.employerId}
  />
  {errors.employerId? errors.employerId : null}
    */}
          {/* <input
    type="text"
    name=" cityId"
    placeholder="Şehir"
    onChange={handleChange}
    values={values.cityId}
  />
  {errors.cityId? errors.cityId : null} */}
        </Form>

        <button type="submit">Ekle</button>
      </form>
    </div>
  );
}
