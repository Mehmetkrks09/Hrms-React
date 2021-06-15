import axios from "axios";
export default class WaysOfWork{

add(){
    return axios.post("http://localhost:8080/api/wayOfWorking/add")
}
getAll(){
    return axios.get("http://localhost:8080/api/wayOfWorking/getAll")
}

}