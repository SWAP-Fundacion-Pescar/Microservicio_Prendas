import IAddMediaToClotheDTO from "../../Application/Interfaces/IAddMediaToClotheDTO";
import ICreateClotheDTO from "../../Application/Interfaces/ICreateClotheDTO";
import IGetClothesDTO from "../../Application/Interfaces/IGetClothesDTO";
import IRemoveMediaFromClotheDTO from "../../Application/Interfaces/IRemoveMediaFromClotheDTO";
import IClotheDocument from "../../Infrastructure/Interfaces/IClotheDocument";
import IReview from "./IReview";

interface IClothesServicesDomain
{
    getClotheById(clotheId: string): Promise<IClotheDocument>;
    getClothesByUserId(userId: string): Promise<Array<IClotheDocument>>;
    getClothes(getClothesDTO: IGetClothesDTO): Promise<Array<IClotheDocument>> 

    addClothe(createClotheDTO: ICreateClotheDTO): Promise<IClotheDocument>;        
    deleteClothe(clotheId: string): Promise<void>;
    addMediaToClothe(addMediaToClotheDTO: IAddMediaToClotheDTO): Promise<IClotheDocument>; // Falta definir DTO
    removeMediaFromClothe(removeMediaFromClotheDTO: IRemoveMediaFromClotheDTO): Promise<IClotheDocument>; // Falta definir DTO
    addReview(review: IReview): Promise<IClotheDocument>; // Falta definir DTO
    updateClotheDetails(): Promise<IClotheDocument>; // Falta definir DTO
}
export default IClothesServicesDomain;