import IReceivedDataToAddMediaToClothe from "../../Application/Interfaces/IReceivedDataToAddMediaToClothe";
import IReceivedDataForClotheDTO from "../../Application/Interfaces/IReceivedDataForClotheDTO";
import IGetClothesDTO from "../../Application/Interfaces/IGetClothesDTO";
import IRemoveMediaFromClotheDTO from "../../Application/Interfaces/IRemoveMediaFromClotheDTO";
import IClotheDocument from "../../Infrastructure/Interfaces/IClotheDocument";
import IClothesCommand from "../../Infrastructure/Interfaces/IClothesCommand";
import IClothesQuery from "../../Infrastructure/Interfaces/IClothesQuery";
import IClothesServicesDomain from "../Interfaces/IClothesServicesDomain";
import IReview from "../Interfaces/IReview";
import IReceivedDataToAddReview from "../../Application/Interfaces/IReceivedDataToAddReview";

class ClothesServicesDomain implements IClothesServicesDomain
{
    private readonly clothesCommand: IClothesCommand;
    private readonly clothesQuery: IClothesQuery;
    constructor(clothesCommand: IClothesCommand, clothesQuery: IClothesQuery)
    {
        this.clothesCommand = clothesCommand;
        this.clothesQuery = clothesQuery;
    }
    getClotheById(clotheId: string): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    getClothesByUserId(userId: string): Promise<Array<IClotheDocument>> {
        throw new Error("Method not implemented.");
    }
    getClothes(getClothesDTO: IGetClothesDTO): Promise<Array<IClotheDocument>> {
        throw new Error("Method not implemented.");
    }
    addClothe(createClotheDTO: IReceivedDataForClotheDTO): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    deleteClothe(clotheId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    addMediaToClothe(receivedDataToAddMediaToClothe: IReceivedDataToAddMediaToClothe): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    removeMediaFromClothe(removeMediaFromClotheDTO: IRemoveMediaFromClotheDTO): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    addReview(receivedDataToAddReview: IReceivedDataToAddReview): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    updateClotheDetails(): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
}
export default ClothesServicesDomain;