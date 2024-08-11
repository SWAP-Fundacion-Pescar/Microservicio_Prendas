import AddClotheRequest from "../../Application/Requests/AddClotheRequest";
import AddMediaRequest from "../../Application/Requests/AddMediaRequest";
import AddReviewRequest from "../../Application/Requests/AddReviewRequest";
import GetClothesRequest from "../../Application/Requests/GetClothesRequest";
import RemoveMediaRequest from "../../Application/Requests/RemoveMediaRequest";
import UpdateClotheRequest from "../../Application/Requests/UpdateClotheRequest";
import IClotheDocument from "../../Infrastructure/Interfaces/IClotheDocument";

interface IClothesServicesDomain
{
    getClotheById(clotheId: string): Promise<IClotheDocument>;
    getClothesByUserId(userId: string): Promise<Array<IClotheDocument>>;
    getClothes(getClothesRequest: GetClothesRequest): Promise<Array<IClotheDocument>> 

    addClothe(addClotheRequest: AddClotheRequest): Promise<IClotheDocument>;        
    deleteClothe(clotheId: string): Promise<void>;
    addMedia(addMediaRequest: AddMediaRequest): Promise<IClotheDocument>; 
    removeMedia(removeMediaRequest: RemoveMediaRequest): Promise<IClotheDocument>; 
    addReview(addReviewRequest: AddReviewRequest): Promise<IClotheDocument>; 
    updateClotheDetails(updateClotheRequest: UpdateClotheRequest): Promise<IClotheDocument>; 
}
export default IClothesServicesDomain;