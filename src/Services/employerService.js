import axios from "axios"

export default class EmployerService{

    getEmployeer(){
return  axios.get("http://localhost:8080/api/employers/getall")
    }
postEmployer(){

return axios.post("http://localhost:8080/api/employers/register")

}
EmployerUpdate(values){
    return axios.put("http://localhost:8080/api/employers/update",values)
}

VerifyUpdate(employerId,employerUpdateId){
    return axios.put("http://localhost:8080/api/employers/verifyUpdate?employerId="+employerId+"&employerUpdateId="+employerUpdateId)
}

getAllUpdate(){
    return axios.get("http://localhost:8080/api/employers/getallUpdate")
}

}     