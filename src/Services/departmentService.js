import axios from "axios"

export default class DepartmentService{


getDepartment(){
    return axios.get("http://localhost:8080/api/cv/department/getAll")
}


    postDepartment( Department){
        return axios.post("http://localhost:8080/api/cv/department/add")
    }
}