import axios from "axios";
export default class FavoriteAdvertisementService{

    postFavoriteAdvertisement(values){
        return axios.post("http://localhost:8080/api/favoriteAdvertisement/add",values)
    }
    getByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/favoriteAdvertisement/getByJobSeekerId?id="+id)
    }

    deleteFav(id){
        return axios.post("http://localhost:8080/api/favoriteAdvertisement/delete?id="+id)
    }

}  