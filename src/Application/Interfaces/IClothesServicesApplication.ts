import Clothe from "../../Domain/Entities/Clothe";
import IReview from "../../Domain/Interfaces/IReview";
import IAddMediaToClotheDTO from "./IAddMediaToClotheDTO";
import ICreateClotheDTO from "./ICreateClotheDTO";
import IGetClothesDTO from "./IGetClothesDTO";
import IRemoveMediaFromClotheDTO from "./IRemoveMediaFromClotheDTO";

interface IClothesServicesApplication
{    
    getClotheById(clotheId: string): Promise<Clothe>;
    getClothesByUserId(userId: string): Promise<Array<Clothe>>;
    getClothes(getClothesDTO: IGetClothesDTO): Promise<Array<Clothe>>; 

    addClothe(createClotheDTO: ICreateClotheDTO): Promise<Clothe>;        
    deleteClothe(clotheId: string): Promise<void>;
    addMediaToClothe(addMediaToClotheDTO: IAddMediaToClotheDTO): Promise<Clothe>; 
    removeMediaFromClothe(removeMediaFromClotheDTO: IRemoveMediaFromClotheDTO): Promise<Clothe>;
    addReview(review: IReview): Promise<Clothe>; 
    updateClotheDetails(): Promise<Clothe>; 
}
export default IClothesServicesApplication;