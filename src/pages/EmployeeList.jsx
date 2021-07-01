import React, { useState, useEffect } from "react";
import { Table,  Icon,Menu} from "semantic-ui-react";
import EmployeeService from "../Services/EmployeeService";



export default function EmployeeList() {
    const [employees, setEmployee] = useState([])


    let employeeService=new EmployeeService();

    useEffect(()=>{
       
        employeeService.getAllEmployeee().then(result=>setEmployee(result.data.data))     
    },[])
    
      return (
        <div>
 
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>PasswORD</Table.HeaderCell>
                
                <Table.HeaderCell>first Name</Table.HeaderCell>
                <Table.HeaderCell>last <Name></Name></Table.HeaderCell>
               
              
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
          
          
                  {employees.map((employees)=>
                  (
                    <Table.Row key={employees.id}>
                    <Table.Cell>{employees.email }</Table.Cell>
                    <Table.Cell>{employees.password}</Table.Cell>
                    <Table.Cell>{employees.firstName}</Table.Cell>
                    <Table.Cell>{employees.lastName}</Table.Cell>
                    
                 
                   
                  </Table.Row>
    
    
                  ))
              }
            
            </Table.Body>
    
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left" />
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      );
}

