import Clothe from "../../Domain/Entities/Clothe";
import IClotheDocument from "./IClotheDocument";

interface IClothesCommand
{
    addClothe(clothe: Clothe): Promise<IClotheDocument>;        
    deleteClothe(clotheId: string): Promise<void>;
    addMediaToClothe(): Promise<IClotheDocument>; // Falta definir DTO
    removeMediaFromClothe(): Promise<IClotheDocument>; // Falta definir DTO
    addReview(): Promise<IClotheDocument>; // Falta definir DTO
    updateClotheDetails(): Promise<IClotheDocument>; // Falta definir DTO
}
export default IClothesCommand;