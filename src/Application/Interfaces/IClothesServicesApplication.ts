import Clothe from "../../Domain/Entities/Clothe";
import AddClotheRequest from "../Requests/AddClotheRequest";
import AddMediaRequest from "../Requests/AddMediaRequest";
import AddReviewRequest from "../Requests/AddReviewRequest";
import GetClothesRequest from "../Requests/GetClothesRequest";
import RemoveMediaRequest from "../Requests/RemoveMediaRequest";
import ClotheResponse from "../Responses/ClotheResponse";

interface IClothesServicesApplication
{    
    getClotheById(clotheId: string): Promise<ClotheResponse>;
    getClothesByUserId(userId: string): Promise<Array<ClotheResponse>>;
    getClothes(getClothesRequesst: GetClothesRequest): Promise<Array<ClotheResponse>>; 

    addClothe(addClotheRequest: AddClotheRequest): Promise<ClotheResponse>;        
    deleteClothe(clotheId: string): Promise<void>;
    addMediaToClothe(addMediaRequest: AddMediaRequest): Promise<ClotheResponse>; 
    removeMediaFromClothe(removeMediaRequest: RemoveMediaRequest): Promise<ClotheResponse>;
    addReview(addReviewRequest: AddReviewRequest): Promise<ClotheResponse>; 
    updateClotheDetails(): Promise<Clothe>; 
}
export default IClothesServicesApplication;