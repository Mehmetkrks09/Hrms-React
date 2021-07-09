import axios from "axios"

export default class CvService {

getJobSeekerId(id){
    return axios.get("http://localhost:8080/api/cv/getByJobSeekerId?jobSeekerId="+id)
}
postCv(values){
    return axios.post("http://localhost:8080/api/cv/add",values)
}
postCvPhoto(id,fd){
    return axios.post("http://localhost:8080/api/cv/imageUpload?cvId="+id,fd)
}
UpdateCv(values){
    return axios.put("http://localhost:8080/api/cv/update",values)
}
}