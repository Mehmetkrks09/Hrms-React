// import React, { useEffect, useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
// import FavoriteAdvertisementService from "../Services/favoriteAdvertisement";









// export default function EmployeeInfoUpdate() {

//   let favoriteAdvertisementService= new FavoriteAdvertisementService();

// //   const CvUpdateSchema = Yup.object().shape({
    
// //     // photo: Yup.string().nullable().required("Bu alanın doldurulması zorunludur"),
// //     gitHubLink: Yup.string().required("Bu alanın doldurulması zorunludur"),
  
// //     linkedLink: Yup.string().required("Bu alanın doldurulması zorunludur"),
// //     description: Yup.string().required("Bu alanın doldurulması zorunludur"),
// //     foreignLanguageId: Yup.string().required("Posizyon sayısı zorunludur"),
// //     jobExperienceId: Yup.string().required("Bu alanın doldurulması zorunludur"),
// //     schoolId: Yup.string().required("Bu alanın doldurulması zorunludur"),
// //     departmentId: Yup.string().required("Bu alanın doldurulması zorunludur")
// //   });


//   const formik = useFormik({
//     initialValues: {
//         id: "",
//         jobAdvertisementId: "",
//         jobSeekerId: "",
       
  
     
//     },
//     // validationSchema: CvUpdateSchema,
//     onSubmit: (values) => {
 
//     values.id="45";
//     // values.photo="photo"
//        favoriteAdvertisementService.postFavoriteAdvertisement(values).then((result) => console.log(result.data.data));
//       alert("Favorite Advertisement Has Been Updated");
//       console.log(values)
      
      
//     } 
//   });


//   const handleChangeSemantic = (value, fieldName) => {
//     formik.setFieldValue(fieldName, value);
//  }

//   return (
//     <div>
//       <Card fluid>
//       <Card.Content header='Add Favorite Advertisement ' />
//       <Card.Content>
//       <Form onSubmit={formik.handleSubmit}>
        
//               <Form.Field>
//               <label>First Name </label>
//                 <Input
//                   placeholder="First Name..."
               
//                 error={Boolean(formik.errors.firstName).toString()}
//                   value={formik.values.firstName}
//                   name="firstName"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {/* {formik.errors.description && formik.touched.description && (
//                   <div className={"ui pointing red basic label"}>
//                     {formik.errors.description}
//                   </div>
//                 )} */}
//               </Form.Field>

              
//               <Form.Field>
//               <label>Last Name </label>
//                 <Input
//                   placeholder="Last Name..."
                 
//                 error={Boolean(formik.errors.lastName).toString()}
//                   value={formik.values.lastName}
//                   name="lastName"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {/* {formik.errors.description && formik.touched.description && (
//                   <div className={"ui pointing red basic label"}>
//                     {formik.errors.description}
//                   </div>
//                 )} */}
//               </Form.Field>

//               <Form.Field>
//               <label>E-mail </label>
//                 <Input type="email"
//                   placeholder="E-Mail"
//                 error={Boolean(formik.errors.email).toString()}
//                   value={formik.values.email}
//                   name="email"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {/* {formik.errors.description && formik.touched.description && (
//                   <div className={"ui pointing red basic label"}>
//                     {formik.errors.description}
//                   </div>
//                 )} */}
//               </Form.Field>
//               <Form.Field>
//               <label>Şifre </label>
//                 <Input type="password"
//                   placeholder="Password"
                
//                 error={Boolean(formik.errors.password).toString()}
//                   value={formik.values.password}
//                   name="password"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {/* {formik.errors.description && formik.touched.description && (
//                   <div className={"ui pointing red basic label"}>
//                     {formik.errors.description}
//                   </div>
//                 )} */}
//               </Form.Field>

              

            
//               <Button
//                 content="Güncelle"
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