import Clothe from "../../Domain/Entities/Clothe";
import IClothesServicesDomain from "../../Domain/Interfaces/IClothesServicesDomain";
import IClothesServicesApplication from "../Interfaces/IClothesServicesApplication";

class ClothesServicesApplication implements IClothesServicesApplication
{
    private readonly clothesServicesDomain: IClothesServicesDomain;
    constructor(clothesServicesDomain: IClothesServicesDomain)
    {
        this.clothesServicesDomain = clothesServicesDomain;
    }
    getClotheById(clotheId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getClothesByUserId(userId: string): Promise<Array<void>> {
        throw new Error("Method not implemented.");
    }
    getClothes(): Promise<Array<void>> {
        throw new Error("Method not implemented.");
    }
    addClothe(clothe: Clothe): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteClothe(clotheId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    addMediaToClothe(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    removeMediaFromClothe(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    addReview(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateClotheDetails(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
export default ClothesServicesApplication;