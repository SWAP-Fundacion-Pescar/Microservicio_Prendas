import AddClotheRequest from "../../Application/Requests/AddClotheRequest";
import AddMediaRequest from "../../Application/Requests/AddMediaRequest";
import AddReviewRequest from "../../Application/Requests/AddReviewRequest";
import GetClothesRequest from "../../Application/Requests/GetClothesRequest";
import RemoveMediaRequest from "../../Application/Requests/RemoveMediaRequest";
import IClotheDocument from "../../Infrastructure/Interfaces/IClotheDocument";
import IClothesCommand from "../../Infrastructure/Interfaces/IClothesCommand";
import IClothesQuery from "../../Infrastructure/Interfaces/IClothesQuery";
import AddReviewDTO from "../DTO/AddReviewDTO";
import Review from "../Entities/Review";
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
    async getClotheById(clotheId: string): Promise<IClotheDocument> {
        const retrievedClothe: IClotheDocument = await this.clothesQuery.getClotheById(clotheId);
        return retrievedClothe;
    }
    async getClothesByUserId(userId: string): Promise<Array<IClotheDocument>> {
        const retrievedClothes: Array<IClotheDocument> = await this.clothesQuery.getClothesByUserId(userId);
        return retrievedClothes;
    }
    async getClothes(getClothesRequest: GetClothesRequest): Promise<Array<IClotheDocument>> {
        const retrievedClothes: Array<IClotheDocument> = await this.clothesQuery.getClothes(getClothesRequest);
        return retrievedClothes;
    }
    async addClothe(addClotheRequest: AddClotheRequest): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    async deleteClothe(clotheId: string): Promise<void> {
        await this.clothesCommand.deleteClothe(clotheId);
    }
    async addMedia(addMediaRequest: AddMediaRequest): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    async removeMedia(removeMediaRequest: RemoveMediaRequest): Promise<IClotheDocument> {
        const updatedClothe: IClotheDocument = await this.clothesCommand.removeMedia(removeMediaRequest);
        return updatedClothe;
    }
    async addReview(addReviewRequest: AddReviewRequest): Promise<IClotheDocument> {
        const review: Review = new Review(addReviewRequest.senderUserId, addReviewRequest.receiverUserId, addReviewRequest.puntuation, addReviewRequest.comment);
        const addReviewDTO: AddReviewDTO = new AddReviewDTO(addReviewRequest.clotheId, review);
        const updatedClothe: IClotheDocument = await this.clothesCommand.addReview(addReviewDTO);
        return updatedClothe;
    }
    async updateClotheDetails(): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
}
export default ClothesServicesDomain;