import axios from "axios";

export default class EmployeeService{
    getAllEmployee(){
        return axios.get("http://localhost:8080/api/employees/getAll")
    }
    postEmployee(values){
        return axios.post("http://localhost:8080/api/employees/register",values)
    }
    putEmployee(values){
        return axios.put("http://localhost:8080/api/employees/update",values)
    }
    
}           