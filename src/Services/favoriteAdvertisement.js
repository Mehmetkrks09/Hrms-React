import axios from "axios";
export default class FavoriteAdvertisementService{

    postFavoriteAdvertisement(values){
        return axios.post("http://localhost:8080/api/favoriteAdvertisement/add",values)
    }
    

}