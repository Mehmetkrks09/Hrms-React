

export const ADD_TO_FAVORİTES="ADD_TO_FAVOURİTES"
export const REMOVE_FROM_FAVORİTES="REMOVE_FROM_FAVORİTES"

export function addToFavorites(advertisement){
    return{
      
        type : ADD_TO_FAVORİTES,
        payload : advertisement

    }

}
export function removeFromFavorites(advertisement){
    return{
        type : REMOVE_FROM_FAVORİTES,
        payload : advertisement
    }
}