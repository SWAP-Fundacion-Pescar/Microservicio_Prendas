import NotFoundException from "../../Application/Exceptions/NotFoundException";
import UnauthorizedException from "../../Application/Exceptions/UnauthorizedException";
import AddClotheRequest from "../../Application/Requests/AddClotheRequest";
import AddMediaRequest from "../../Application/Requests/AddMediaRequest";
import AddReviewRequest from "../../Application/Requests/AddReviewRequest";
import GetClothesRequest from "../../Application/Requests/GetClothesRequest";
import RemoveMediaRequest from "../../Application/Requests/RemoveMediaRequest";
import UpdateClotheRequest from "../../Application/Requests/UpdateClotheRequest";
import IClotheDocument from "../../Infrastructure/Interfaces/IClotheDocument";
import IClothesCommand from "../../Infrastructure/Interfaces/IClothesCommand";
import IClothesQuery from "../../Infrastructure/Interfaces/IClothesQuery";
import IMediaDocument from "../../Infrastructure/Interfaces/IMediaDocument";
import AddClotheDTO from "../DTO/AddClotheDTO";
import AddMediaDTO from "../DTO/AddMediaDTO";
import AddReviewDTO from "../DTO/AddReviewDTO";
import Media from "../Entities/Media";
import Review from "../Entities/Review";
import IClothesServicesDomain from "../Interfaces/IClothesServicesDomain";
import path from "path";
import fs from 'fs';

class ClothesServicesDomain implements IClothesServicesDomain {
    private readonly clothesCommand: IClothesCommand;
    private readonly clothesQuery: IClothesQuery;
    constructor(clothesCommand: IClothesCommand, clothesQuery: IClothesQuery) {
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
        // const fileType: string = addClotheRequest.media.mimetype.startsWith('image/') ? 'images' : 'videos';
        // const mediaUri = `http://localhost:3005/uploads/${fileType}/${addClotheRequest.media.filename}`;
        const media: Media = new Media(addClotheRequest.mediaUrl, 'image');
        const addClotheDTO: AddClotheDTO = new AddClotheDTO(addClotheRequest.userId, addClotheRequest.name, addClotheRequest.category, addClotheRequest.expectedCategory, addClotheRequest.size, addClotheRequest.expectedSize, addClotheRequest.gender, addClotheRequest.expectedGender, addClotheRequest.description, addClotheRequest.color, addClotheRequest.expectedColor, media);
        const createdClothe: IClotheDocument = await this.clothesCommand.addClothe(addClotheDTO);
        return createdClothe;

    }
    async deleteClothe(clotheId: string): Promise<void> {
        const retrievedClothe: IClotheDocument = await this.getClotheById(clotheId);
        retrievedClothe.media.forEach(media => {
            this.removeMediaFile(media);
        });
        await this.clothesCommand.deleteClothe(clotheId);
    }
    async addMedia(addMediaRequest: AddMediaRequest): Promise<IClotheDocument> {
        const clothe: IClotheDocument = await this.getClotheById(addMediaRequest.clotheId);
        if (clothe.userId != addMediaRequest.userId) throw new UnauthorizedException('Usuario no autorizado');
        const media: Media = new Media(addMediaRequest.mediaUrl, 'image');
        const addMediaDTO: AddMediaDTO = new AddMediaDTO(addMediaRequest.clotheId, media);
        const updatedClothe: IClotheDocument = await this.clothesCommand.addMedia(addMediaDTO);
        return updatedClothe;
    }
    removeMediaFile(media: IMediaDocument): void {
        const filename = path.basename(media.url);
        const filePath = path.join(__dirname, '../../../../FrontEnd/public/uploads/', `${media.type}/`, filename);
        if (fs.existsSync(filePath)) {
            fs.rm(filePath, () => console.log('Archivo eliminado'));
        }
    }
    async removeMedia(removeMediaRequest: RemoveMediaRequest): Promise<IClotheDocument> {
        const clothe: IClotheDocument = await this.getClotheById(removeMediaRequest.clotheId);
        if (clothe.userId != removeMediaRequest.userId) throw new UnauthorizedException('Usuario no autorizado');
        const media: IMediaDocument | null = clothe.media.id(removeMediaRequest.mediaId);
        if (!media) throw new NotFoundException('Media no existe');
        this.removeMediaFile(media);
        const updatedClothe: IClotheDocument = await this.clothesCommand.removeMedia(removeMediaRequest);
        return updatedClothe;
    }
    async addReview(addReviewRequest: AddReviewRequest): Promise<IClotheDocument> {
        const review: Review = new Review(addReviewRequest.senderUserId, addReviewRequest.receiverUserId, addReviewRequest.puntuation, addReviewRequest.comment);
        const addReviewDTO: AddReviewDTO = new AddReviewDTO(addReviewRequest.clotheId, review);
        const updatedClothe: IClotheDocument = await this.clothesCommand.addReview(addReviewDTO);
        return updatedClothe;
    }
    async updateClotheDetails(updateClotheRequest: UpdateClotheRequest): Promise<IClotheDocument> {
        const clothe: IClotheDocument = await this.getClotheById(updateClotheRequest.clotheId);
        if (clothe.userId != updateClotheRequest.userId) throw new UnauthorizedException('Usuario no autorizado');
        const updatedClothe: IClotheDocument = await this.clothesCommand.updateClotheDetails(updateClotheRequest);
        return updatedClothe;
    }
}
export default ClothesServicesDomain;