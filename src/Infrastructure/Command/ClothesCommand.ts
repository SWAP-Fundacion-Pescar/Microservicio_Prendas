import Clothe from "../../Domain/Entities/Clothe";
import IClotheDocument from "../Interfaces/IClotheDocument";
import IClothesCommand from "../Interfaces/IClothesCommand";

class ClothesCommand implements IClothesCommand
{
    addClothe(clothe: Clothe): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    deleteClothe(clotheId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    addImageToClothe(): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    removeImageFromClothe(): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    addReview(): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    updateClotheDetails(): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    
}
export default ClothesCommand;