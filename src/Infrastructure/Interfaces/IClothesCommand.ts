import AddMediaDTO from "../../Domain/DTO/AddMediaDTO";
import AddClotheDTO from "../../Domain/DTO/AddClotheDTO";
import IClotheDocument from "./IClotheDocument";
import RemoveMediaRequest from "../../Application/Requests/RemoveMediaRequest";
import AddReviewDTO from "../../Domain/DTO/AddReviewDTO";
import UpdateClotheRequest from "../../Application/Requests/UpdateClotheRequest";

interface IClothesCommand
{
    addClothe(addClotheDTO: AddClotheDTO): Promise<IClotheDocument>;        
    deleteClothe(clotheId: string): Promise<void>;
    addMedia(addMediaDTO: AddMediaDTO): Promise<IClotheDocument>; 
    removeMedia(removeMediaRequest: RemoveMediaRequest): Promise<IClotheDocument>; 
    addReview(addReviewDTO: AddReviewDTO): Promise<IClotheDocument>; 
    updateClotheDetails(updatedClotheRequest: UpdateClotheRequest): Promise<IClotheDocument>; 
}
export default IClothesCommand;