import IReceivedDataToAddMediaToClothe from "../../Application/Interfaces/IReceivedDataToAddMediaToClothe";
import IReceivedDataForClotheDTO from "../../Application/Interfaces/IReceivedDataForClotheDTO";
import IGetClothesDTO from "../../Application/Interfaces/IGetClothesDTO";
import IRemoveMediaFromClotheDTO from "../../Application/Interfaces/IRemoveMediaFromClotheDTO";
import IClotheDocument from "../../Infrastructure/Interfaces/IClotheDocument";
import IReceivedDataToAddReview from "../../Application/Interfaces/IReceivedDataToAddReview";

interface IClothesServicesDomain
{
    getClotheById(clotheId: string): Promise<IClotheDocument>;
    getClothesByUserId(userId: string): Promise<Array<IClotheDocument>>;
    getClothes(getClothesDTO: IGetClothesDTO): Promise<Array<IClotheDocument>> 

    addClothe(createClotheDTO: IReceivedDataForClotheDTO): Promise<IClotheDocument>;        
    deleteClothe(clotheId: string): Promise<void>;
    addMediaToClothe(receivedDataToAddMediaToClothe: IReceivedDataToAddMediaToClothe): Promise<IClotheDocument>; 
    removeMediaFromClothe(removeMediaFromClotheDTO: IRemoveMediaFromClotheDTO): Promise<IClotheDocument>; 
    addReview(receivedDataToAddReview: IReceivedDataToAddReview): Promise<IClotheDocument>; 
    updateClotheDetails(): Promise<IClotheDocument>; 
}
export default IClothesServicesDomain;