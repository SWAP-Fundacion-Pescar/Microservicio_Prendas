import IAddMediaToClotheDTO from "../../Application/Interfaces/IAddMediaToClotheDTO";
import ICreateClotheDTO from "../../Application/Interfaces/ICreateClotheDTO";
import IGetClothesDTO from "../../Application/Interfaces/IGetClothesDTO";
import IRemoveMediaFromClotheDTO from "../../Application/Interfaces/IRemoveMediaFromClotheDTO";
import IClotheDocument from "../../Infrastructure/Interfaces/IClotheDocument";
import IClothesCommand from "../../Infrastructure/Interfaces/IClothesCommand";
import IClothesQuery from "../../Infrastructure/Interfaces/IClothesQuery";
import IClothesServicesDomain from "../Interfaces/IClothesServicesDomain";
import IReview from "../Interfaces/IReview";

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
export default ClothesServicesDomain;