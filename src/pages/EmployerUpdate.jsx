
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Card, Form, Text } from "semantic-ui-react";
import EmployerService from "../Services/employerService";



export default function EmployerUpdate() {

   let employerService= new EmployerService();

  const EmployerUpdateSchema = Yup.object().shape({
    companyName: Yup.string().required("Bu alanın doldurulması zorunludur"),
    webSite: Yup.string().required("Bu alanın doldurulması zorunludur"),
    phoneNumber: Yup.string().length(11).required("Bu alanın doldurulması zorunludur"),
    email: Yup.string().required("Bu alanın doldurulması zorunludur"),
   
  });


  const formik = useFormik({
    initialValues: {
        companyName: "",
        webSite: "",
        phoneNumber: "",
        email: "",
        employerId:"",
      
    },
    validationSchema: EmployerUpdateSchema,
    onSubmit: (values) => {
 
    values.employerId="1";
    
       employerService.EmployerUpdate(values).then((result) => console.log(result.data.data));
       
      alert("Employer Has Been Updated");
      console.log(values)

    } 
  });

 

  return (
    <div>
      <Card fluid>
      <Card.Content header='Employer Güncelle' />
      <Card.Content>
      <Form onSubmit={formik.handleSubmit}>
        
              
                   <Form.Field>
              <label>Company Name </label>
                <input type="text" 
                  placeholder="companyName..."
                error={Boolean(formik.errors.companyName).toString()}
                  value={formik.values.companyName}
                  name="companyName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.companyName && formik.touched.companyName && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.companyName}
                  </div>
                )}
              </Form.Field>

              
              <Form.Field>
              <label>Web Site  </label>
                <input type="text" 
                  placeholder="Web Site"
                 
                error={Boolean(formik.errors.webSite).toString()}
                  value={formik.values.webSite}
                  name="webSite"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.webSite && formik.touched.webSite && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.webSite}
                  </div>
                )}
              </Form.Field>

              <Form.Field>
              <label>E-mail </label>
                <Input type="email"
                  placeholder="E-Mail"
                error={Boolean(formik.errors.email).toString()}
                  value={formik.values.email}
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.email}
                  </div>
                )}
              </Form.Field>
              <Form.Field>
              <label>Phone Number </label>
                <input type="text"
                  placeholder="Phone Number"
                
                error={Boolean(formik.errors.phoneNumber).toString()}
                  value={formik.values.phoneNumber}
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.phoneNumber}
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