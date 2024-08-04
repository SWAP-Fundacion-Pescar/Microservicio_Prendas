import IReceivedDataToAddReview from "../../Application/Interfaces/IReceivedDataToAddReview";
import IRemoveMediaFromClotheDTO from "../../Application/Interfaces/IRemoveMediaFromClotheDTO";
import AddMediaToClotheDTO from "../../Domain/DTO/AddMediaToClotheDTO";
import CreateClotheDTO from "../../Domain/DTO/CreateClotheDTO";
import IClotheDocument from "./IClotheDocument";

interface IClothesCommand
{
    addClothe(createClotheDTO: CreateClotheDTO): Promise<IClotheDocument>;        
    deleteClothe(clotheId: string): Promise<void>;
    addMediaToClothe(addMediaToClotheDTO: AddMediaToClotheDTO): Promise<IClotheDocument>; 
    removeMediaFromClothe(removeMediaFromClotheDTO: IRemoveMediaFromClotheDTO): Promise<IClotheDocument>; 
    addReview(receivedDataToAddReview: IReceivedDataToAddReview): Promise<IClotheDocument>; 
    updateClotheDetails(): Promise<IClotheDocument>; 
}
export default IClothesCommand;