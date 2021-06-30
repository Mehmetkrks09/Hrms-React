import axios from "axios";

export default class ForeignLanguageService{

 add(values){
     return axios.post("http://localhost:8080/api/cv/foreignLanguage/add"+values)
 }

 getAll(){
     return axios.get("http://localhost:8080/api/cv/foreignLanguage/getAll");
 }

}