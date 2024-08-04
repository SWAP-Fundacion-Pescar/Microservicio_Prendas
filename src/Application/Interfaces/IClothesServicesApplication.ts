import Clothe from "../../Domain/Entities/Clothe";
import IReview from "../../Domain/Interfaces/IReview";
import IReceivedDataToAddMediaToClothe from "./IReceivedDataToAddMediaToClothe";
import IReceivedDataForClotheDTO from "./IReceivedDataForClotheDTO";
import IGetClothesDTO from "./IGetClothesDTO";
import IRemoveMediaFromClotheDTO from "./IRemoveMediaFromClotheDTO";
import IReceivedDataToAddReview from "./IReceivedDataToAddReview";

interface IClothesServicesApplication
{    
    getClotheById(clotheId: string): Promise<Clothe>;
    getClothesByUserId(userId: string): Promise<Array<Clothe>>;
    getClothes(getClothesDTO: IGetClothesDTO): Promise<Array<Clothe>>; 

    addClothe(recivedDataForClotheDTO: IReceivedDataForClotheDTO): Promise<Clothe>;        
    deleteClothe(clotheId: string): Promise<void>;
    addMediaToClothe(receivedDataToAddMediaToClothe: IReceivedDataToAddMediaToClothe): Promise<Clothe>; 
    removeMediaFromClothe(removeMediaFromClotheDTO: IRemoveMediaFromClotheDTO): Promise<Clothe>;
    addReview(receivedDataToAddReview: IReceivedDataToAddReview): Promise<Clothe>; 
    updateClotheDetails(): Promise<Clothe>; 
}
export default IClothesServicesApplication;