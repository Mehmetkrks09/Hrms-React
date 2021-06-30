import axios from "axios"

export default class JobExperienceService{

    getByGrudutionYear(){
        return axios.get("http://localhost:8080/api/cv/jobExperience/ByGrudutionYear")
    }

    getAll(){
        return axios.get("http://localhost:8080/api/cv/jobExperience/getAll");
    }

    add(values){
        return axios.post("http://localhost:8080/api/cv/jobExperience/add"+values)
    }

}     