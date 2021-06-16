import axios from "axios";
export default class WorkingTimeService{

add(){
    return axios.post("http://localhost:8080/api/workingTime/add")
}
getAll(){
    return axios.get("http://localhost:8080/api/workingTime/getAll")
}


}  