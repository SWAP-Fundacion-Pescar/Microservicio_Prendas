import IClotheDocument from "../../Infrastructure/Interfaces/IClotheDocument";
import Clothe from "../Entities/Clothe";

interface IClothesServicesDomain
{
    getClotheById(clotheId: string): Promise<IClotheDocument>;
    getClothesByUserId(userId: string): Promise<Array<IClotheDocument>>;
    getClothes(): Promise<Array<IClotheDocument>> 

    addClothe(clothe: Clothe): Promise<IClotheDocument>;        
    deleteClothe(clotheId: string): Promise<void>;
    addImageToClothe(): Promise<IClotheDocument>; // Falta definir DTO
    removeImageFromClothe(): Promise<IClotheDocument>; // Falta definir DTO
    addReview(): Promise<IClotheDocument>; // Falta definir DTO
    updateClotheDetails(): Promise<IClotheDocument>; // Falta definir DTO
}
export default IClothesServicesDomain;