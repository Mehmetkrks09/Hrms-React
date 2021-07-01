import axios from "axios";

export default class JobAdvertisementService {
  getAllJobAdvertisement() {
    return axios.get("http://localhost:8080/api/jobadvertisement/getall");
  }
  add(values) {
    return axios.post("http://localhost:8080/api/jobadvertisement/add",values)
  }

  getAllByEmployer(id) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisement/getAllByEmployer?employerId=" +
        id
    );
  }

  getByDeadlineLessThanEqual(date) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisement/getByApplicationDeadlineLessThanEqual?date=" +
        date
    );
  }
  getByTrue() {
    return axios.get(
      "http://localhost:8080/api/jobadvertisement/getByIsActiveTrue"
    );
  }
  getByWayOfWorkingIdAndCityId(cityId,wayOfWorkingId){
    return axios.get("http://localhost:8080/api/jobadvertisement/getAllByActivatedAndWayOfWorkingandCityId?cityId="+cityId+"&wayOfWorkingId="+wayOfWorkingId);
  }
  
  getByCityId(cityId){
    return axios.get("http://localhost:8080/api/jobadvertisement/getByCityId?id="+cityId);
  }
  getByWayOfWorking(wayOfWorkingId){
    return axios.get("http://localhost:8080/api/jobadvertisement/getAllByActivatedAndWayOfWorking?wayOfWorkingId="+wayOfWorkingId);
  }
}
