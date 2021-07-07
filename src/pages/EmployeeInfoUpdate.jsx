
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input, Card, Form } from "semantic-ui-react";
import EmployeeService from "../Services/employeeService";








export default function EmployeeInfoUpdate() {

  let employeeService=new EmployeeService();

   const EmployeeUpdateSchema = Yup.object().shape({
    
   
  
    email: Yup.string().required("Bu alanın doldurulması zorunludur"),
    password: Yup.string().required("Bu alanın doldurulması zorunludur"),
    firstName: Yup.string().required("Bu alanın doldurulması zorunludur"),
    lastName: Yup.string().required("Bu alanın doldurulması zorunludur"),
   
  });


  const formik = useFormik({
    initialValues: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        id:"",
  
     
    },
     validationSchema: EmployeeUpdateSchema,
    onSubmit: (values) => {
 
    values.id="26";
    
       employeeService.putEmployee(values).then((result) => console.log(result.data.data));
      alert("Employee Has Been Updated");
      console.log(values)
      
      
    } 
  });


  

  return (
    <div>
      <Card fluid>
      <Card.Content header='Employee Güncelle' />
      <Card.Content>
      <Form onSubmit={formik.handleSubmit}>
        
              <Form.Field>
              <label>First Name </label>
                <Input
                  placeholder="First Name..."
               
                error={Boolean(formik.errors.firstName).toString()}
                  value={formik.values.firstName}
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.firstName && formik.touched.firstName && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.firstName}
                  </div>
                )}
              </Form.Field>

              
              <Form.Field>
              <label>Last Name </label>
                <Input
                  placeholder="Last Name..."
                 
                error={Boolean(formik.errors.lastName).toString()}
                  value={formik.values.lastName}
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.lastName && formik.touched.lastName && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.lastName}
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
              <label>Şifre </label>
                <Input type="password"
                  placeholder="Password"
                
                error={Boolean(formik.errors.password).toString()}
                  value={formik.values.password}
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.password}
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