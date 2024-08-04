import Clothe from "../../Domain/Entities/Clothe";
import IClothesServicesDomain from "../../Domain/Interfaces/IClothesServicesDomain";
import IReceivedDataToAddMediaToClothe from "../Interfaces/IReceivedDataToAddMediaToClothe";
import IClothesServicesApplication from "../Interfaces/IClothesServicesApplication";
import IReceivedDataForClotheDTO from "../Interfaces/IReceivedDataForClotheDTO";
import IGetClothesDTO from "../Interfaces/IGetClothesDTO";
import IRemoveMediaFromClotheDTO from "../Interfaces/IRemoveMediaFromClotheDTO";
import IReceivedDataToAddReview from "../Interfaces/IReceivedDataToAddReview";

class ClothesServicesApplication implements IClothesServicesApplication
{
    private readonly clothesServicesDomain: IClothesServicesDomain;
    constructor(clothesServicesDomain: IClothesServicesDomain)
    {
        this.clothesServicesDomain = clothesServicesDomain;
    }
    async getClotheById(clotheId: string): Promise<Clothe> {
        const retrievedClothe: Clothe = await this.clothesServicesDomain.getClotheById(clotheId);
        return retrievedClothe;
    }
    async getClothesByUserId(userId: string): Promise<Array<Clothe>> {
        const retrievedClothes: Array<Clothe> = await this.clothesServicesDomain.getClothesByUserId(userId);
        return retrievedClothes;
    }
    async getClothes(getClothesDTO: IGetClothesDTO): Promise<Array<Clothe>> {
        const retrievedClothes: Array<Clothe> = await this.clothesServicesDomain.getClothes(getClothesDTO);
        return retrievedClothes;
    }
    async addClothe(ReceivedDataForClotheDTO: IReceivedDataForClotheDTO): Promise<Clothe> {
        const createdClothe: Clothe = await this.clothesServicesDomain.addClothe(ReceivedDataForClotheDTO);
        return createdClothe;
    }
    async deleteClothe(clotheId: string): Promise<void> {
        await this.clothesServicesDomain.deleteClothe(clotheId);
    }
    async addMediaToClothe(receivedDataToAddMediaToClothe: IReceivedDataToAddMediaToClothe): Promise<Clothe> {
        const updatedClothe: Clothe = await this.clothesServicesDomain.addMediaToClothe(receivedDataToAddMediaToClothe);
        return updatedClothe;
    }
    async removeMediaFromClothe(removeMediaFromClotheDTO: IRemoveMediaFromClotheDTO): Promise<Clothe> {
        const updatedClothe: Clothe = await this.clothesServicesDomain.removeMediaFromClothe(removeMediaFromClotheDTO);
        return updatedClothe;
    }
    async addReview(receivedDataToAddReview: IReceivedDataToAddReview): Promise<Clothe> {
        const updatedClothe: Clothe = await this.clothesServicesDomain.addReview(receivedDataToAddReview);
        return updatedClothe;
    }
    async updateClotheDetails(): Promise<Clothe> {
        throw new Error("Method not implemented.");
    }
}
export default ClothesServicesApplication;