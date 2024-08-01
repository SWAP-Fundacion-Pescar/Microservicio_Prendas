import IClotheDocument from "../../Infrastructure/Interfaces/IClotheDocument";
import IClothesCommand from "../../Infrastructure/Interfaces/IClothesCommand";
import IClothesQuery from "../../Infrastructure/Interfaces/IClothesQuery";
import Clothe from "../Entities/Clothe";
import IClothesServicesDomain from "../Interfaces/IClothesServicesDomain";

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
    getClothes(): Promise<Array<IClotheDocument>> {
        throw new Error("Method not implemented.");
    }
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
export default ClothesServicesDomain;