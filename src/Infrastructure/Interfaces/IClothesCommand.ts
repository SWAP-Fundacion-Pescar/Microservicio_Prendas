import IAddMediaToClotheDTO from "../../Application/Interfaces/IAddMediaToClotheDTO";
import ICreateClotheDTO from "../../Application/Interfaces/ICreateClotheDTO";
import IRemoveMediaFromClotheDTO from "../../Application/Interfaces/IRemoveMediaFromClotheDTO";
import IReview from "../../Domain/Interfaces/IReview";
import IClotheDocument from "./IClotheDocument";

interface IClothesCommand
{
    addClothe(createClotheDTO: ICreateClotheDTO): Promise<IClotheDocument>;        
    deleteClothe(clotheId: string): Promise<void>;
    addMediaToClothe(addMediaToClotheDTO: IAddMediaToClotheDTO): Promise<IClotheDocument>; 
    removeMediaFromClothe(removeMediaFromClotheDTO: IRemoveMediaFromClotheDTO): Promise<IClotheDocument>; 
    addReview(review: IReview): Promise<IClotheDocument>; 
    updateClotheDetails(): Promise<IClotheDocument>; 
}
export default IClothesCommand;