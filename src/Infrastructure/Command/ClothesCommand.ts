import IAddMediaToClotheDTO from "../../Application/Interfaces/IAddMediaToClotheDTO";
import ICreateClotheDTO from "../../Application/Interfaces/ICreateClotheDTO";
import IRemoveMediaFromClotheDTO from "../../Application/Interfaces/IRemoveMediaFromClotheDTO";
import IReview from "../../Domain/Interfaces/IReview";
import IClotheDocument from "../Interfaces/IClotheDocument";
import IClothesCommand from "../Interfaces/IClothesCommand";

class ClothesCommand implements IClothesCommand
{
    addClothe(createClotheDTO: ICreateClotheDTO): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    deleteClothe(clotheId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    addMediaToClothe(addMediaToClotheDTO: IAddMediaToClotheDTO): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    removeMediaFromClothe(removeMediaFromClotheDTO: IRemoveMediaFromClotheDTO): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    addReview(review: IReview): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    updateClotheDetails(): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }   
    
}
export default ClothesCommand;