import NotFoundException from "../../Application/Exceptions/NotFoundException";
import AddMediaDTO from "../../Domain/DTO/AddMediaDTO";
import AddClotheDTO from "../../Domain/DTO/AddClotheDTO";
import IClotheDocument from "../Interfaces/IClotheDocument";
import IClothesCommand from "../Interfaces/IClothesCommand";
import ClotheModel from "../Persistence/Models/ClotheModel";
import RemoveMediaRequest from "../../Application/Requests/RemoveMediaRequest";
import AddReviewDTO from "../../Domain/DTO/AddReviewDTO";

class ClothesCommand implements IClothesCommand
{
    async addClothe(createClotheDTO: AddClotheDTO): Promise<IClotheDocument> {
        const createdClothe: IClotheDocument = new ClotheModel(createClotheDTO);
        await createdClothe.save();
        return createdClothe;
    }
    async deleteClothe(clotheId: string): Promise<void> {
        await ClotheModel.findByIdAndDelete(clotheId);
    }
    async addMedia(addMediaDTO: AddMediaDTO): Promise<IClotheDocument> {
        const retrievedClothe: IClotheDocument | null = await ClotheModel.findById(addMediaDTO.clotheId);
        if(!retrievedClothe) throw new NotFoundException('No se ha encontrado una prenda');        
        retrievedClothe.media.push(addMediaDTO.media);
        await retrievedClothe.save();
        return retrievedClothe;
    }
    async removeMedia(removeMediaRequest: RemoveMediaRequest): Promise<IClotheDocument> {
        const retrievedClothe: IClotheDocument | null = await ClotheModel.findById(removeMediaRequest.clotheId);
        if(!retrievedClothe) throw new NotFoundException('No se ha encontrado una prenda');
        retrievedClothe.media.splice(removeMediaRequest.mediaIndex, 1);
        await retrievedClothe.save();
        return retrievedClothe;
    }
    async addReview(addReviewDTO: AddReviewDTO): Promise<IClotheDocument> {
        const retrievedClothe: IClotheDocument | null = await ClotheModel.findById(addReviewDTO.clotheId);
        if(!retrievedClothe) throw new NotFoundException('No se ha encontrado una prenda');
        retrievedClothe.review = addReviewDTO.review;
        retrievedClothe.isAvailable = false;
        await retrievedClothe.save();
        return retrievedClothe;
    }
    updateClotheDetails(): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
}
export default ClothesCommand;