import Clothe from "../../Domain/Entities/Clothe";
import IClothesServicesDomain from "../../Domain/Interfaces/IClothesServicesDomain";
import IClothesServicesApplication from "../Interfaces/IClothesServicesApplication";
import AddClotheRequest from "../Requests/AddClotheRequest";
import AddMediaRequest from "../Requests/AddMediaRequest";
import AddReviewRequest from "../Requests/AddReviewRequest";
import GetClothesRequest from "../Requests/GetClothesRequest";
import RemoveMediaRequest from "../Requests/RemoveMediaRequest";
import ClotheResponse from "../Responses/ClotheResponse";

class ClothesServicesApplication implements IClothesServicesApplication
{
    private readonly clothesServicesDomain: IClothesServicesDomain;
    constructor(clothesServicesDomain: IClothesServicesDomain)
    {
        this.clothesServicesDomain = clothesServicesDomain;
    }
    async getClotheById(clotheId: string): Promise<ClotheResponse> {
        const retrievedClothe: Clothe = await this.clothesServicesDomain.getClotheById(clotheId);
        const clotheResponse: ClotheResponse = new ClotheResponse(retrievedClothe);
        return clotheResponse;
    }
    async getClothesByUserId(userId: string): Promise<Array<ClotheResponse>> {
        const retrievedClothes: Array<Clothe> = await this.clothesServicesDomain.getClothesByUserId(userId);
        return retrievedClothes;
    }
    async getClothes(getClothesRequest: GetClothesRequest): Promise<Array<ClotheResponse>> {
        const retrievedClothes: Array<Clothe> = await this.clothesServicesDomain.getClothes(getClothesRequest);
        return retrievedClothes;
    }
    async addClothe(addClotheRequest: AddClotheRequest): Promise<ClotheResponse> {
        const createdClothe: Clothe = await this.clothesServicesDomain.addClothe(addClotheRequest);
        return createdClothe;
    }
    async deleteClothe(clotheId: string): Promise<void> {
        await this.clothesServicesDomain.deleteClothe(clotheId);
    }
    async addMediaToClothe(addMediaRequest: AddMediaRequest): Promise<ClotheResponse> {
        const updatedClothe: Clothe = await this.clothesServicesDomain.addMedia(addMediaRequest);
        return updatedClothe;
    }
    async removeMediaFromClothe(removeMediaRequest: RemoveMediaRequest): Promise<ClotheResponse> {
        const updatedClothe: Clothe = await this.clothesServicesDomain.removeMedia(removeMediaRequest);
        return updatedClothe;
    }
    async addReview(addReviewRequest: AddReviewRequest): Promise<ClotheResponse> {
        const updatedClothe: Clothe = await this.clothesServicesDomain.addReview(addReviewRequest);
        return updatedClothe;
    }
    async updateClotheDetails(): Promise<Clothe> {
        throw new Error("Method not implemented.");
    }
}
export default ClothesServicesApplication;