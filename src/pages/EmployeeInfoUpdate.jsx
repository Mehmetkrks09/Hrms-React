// import React, { useEffect, useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
// import EmployeeService from "../Services/EmployeeService";








// export default function EmployeeInfoUpdate() {

//   let employeeService = new EmployeeService();

//   // const CvUpdateSchema = Yup.object().shape({
    
//   //   // photo: Yup.string().nullable().required("Bu alanın doldurulması zorunludur"),
//   //   gitHubLink: Yup.string().required("Bu alanın doldurulması zorunludur"),
  
//   //   linkedLink: Yup.string().required("Bu alanın doldurulması zorunludur"),
//   //   description: Yup.string().required("Bu alanın doldurulması zorunludur"),
//   //   foreignLanguageId: Yup.string().required("Posizyon sayısı zorunludur"),
//   //   jobExperienceId: Yup.string().required("Bu alanın doldurulması zorunludur"),
//   //   schoolId: Yup.string().required("Bu alanın doldurulması zorunludur"),
//   //   departmentId: Yup.string().required("Bu alanın doldurulması zorunludur")
//   // });


//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       firstName: "",
//       lastName: "",
//       id:""
//     },
//     // validationSchema: CvUpdateSchema,
//     onSubmit: (values) => {
 
//     values.id="7";
   
//       employeeService.putEmployee(values).then((result) => console.log(result.data.data));
//       alert("Employee Has Been Updated");
//       console.log();
    
      
      
//     }  
//   });

 

  
//   const handleChangeSemantic = (value, fieldName) => {
//     formik.setFieldValue(fieldName, value);
//  }

//   return (
//     <div>
//       <Card fluid>
//       <Card.Content header='Employee Güncelle' />
//       <Card.Content>
//       <Form onSubmit={formik.handleSubmit}>
        
//               <Form.Field>
//               <label>First Name </label>
//                 <TextArea
//                   placeholder="First Name..."
//                   style={{ minHeight: 100 }}
//                 // error={Boolean(formik.errors.description).toString()}
//                   value={formik.values.firstName}
//                   name="firstName"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {/* {formik.errors.firstName && formik.touched.firstName && (
//                   <div className={"ui pointing red basic label"}>
//                     {formik.errors.firstName}
//                   </div>
//                 )} */}
//               </Form.Field>

//               <Form.Field>
//               <label>Last Name </label>
//                 <TextArea
//                   placeholder="Last Name"
//                   style={{ minHeight: 10 }}
//                 // error={Boolean(formik.errors.lastName).toString()}
//                   value={formik.values.lastName}
//                   name="lastName"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {/* {formik.errors.lastName && formik.touched.lastName && (
//                   <div className={"ui pointing red basic label"}>
//                     {formik.errors.lastName}
//                   </div>
//                 )} */}
//               </Form.Field>
//               <Form.Field>
//               <label>E Mail </label>
//                 <TextArea
//                   placeholder="E-Mail."
//                   style={{ minHeight: 10 }}
//                 // error={Boolean(formik.errors.email).toString()}
//                   value={formik.values.email}
//                   name="email"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {/* {formik.errors.email && formik.touched.email && (
//                   <div className={"ui pointing red basic label"}>
//                     {formik.errors.email}
//                   </div>
//                 )} */}
//               </Form.Field>
//               <Button
//                 content=" Güncelle"
//                 labelPosition="right"
//                 icon="add"
//                 positive
//                 type="submit"
//                 style={{ marginLeft: "20px" }}
//               />
//       </Form>
//       </Card.Content>
//       </Card>
//     </div>
//   );
    
// }