import NotFoundException from "../../Application/Exceptions/NotFoundException";
import IReceivedDataToAddReview from "../../Application/Interfaces/IReceivedDataToAddReview";
import IRemoveMediaFromClotheDTO from "../../Application/Interfaces/IRemoveMediaFromClotheDTO";
import AddMediaToClotheDTO from "../../Domain/DTO/AddMediaToClotheDTO";
import CreateClotheDTO from "../../Domain/DTO/CreateClotheDTO";
import IClotheDocument from "../Interfaces/IClotheDocument";
import IClothesCommand from "../Interfaces/IClothesCommand";
import ClotheModel from "../Persistence/Models/ClotheModel";

class ClothesCommand implements IClothesCommand
{
    async addClothe(createClotheDTO: CreateClotheDTO): Promise<IClotheDocument> {
        const createdClothe: IClotheDocument = new ClotheModel(createClotheDTO);
        await createdClothe.save();
        return createdClothe;
    }
    async deleteClothe(clotheId: string): Promise<void> {
        await ClotheModel.findByIdAndDelete(clotheId);
    }
    async addMediaToClothe(addMediaToClotheDTO: AddMediaToClotheDTO): Promise<IClotheDocument> {
        const retrievedClothe: IClotheDocument | null = await ClotheModel.findById(addMediaToClotheDTO.clotheId);
        if(!retrievedClothe) throw new NotFoundException('No se ha encontrado una prenda');        
        retrievedClothe.media.push(addMediaToClotheDTO.media);
        await retrievedClothe.save();
        return retrievedClothe;
    }
    async removeMediaFromClothe(removeMediaFromClotheDTO: IRemoveMediaFromClotheDTO): Promise<IClotheDocument> {
        const retrievedClothe: IClotheDocument | null = await ClotheModel.findById(removeMediaFromClotheDTO.clotheId);
        if(!retrievedClothe) throw new NotFoundException('No se ha encontrado una prenda');
        retrievedClothe.media.splice(removeMediaFromClotheDTO.mediaIndex, 1);
        await retrievedClothe.save();
        return retrievedClothe;
    }
    async addReview(receivedDataToAddReview: IReceivedDataToAddReview): Promise<IClotheDocument> {
        const retrievedClothe: IClotheDocument | null = await ClotheModel.findById(receivedDataToAddReview.clotheId);
        if(!retrievedClothe) throw new NotFoundException('No se ha encontrado una prenda');
        retrievedClothe.review = receivedDataToAddReview.review;
        retrievedClothe.isAvailable = false;
        await retrievedClothe.save();
        return retrievedClothe;
    }
    updateClotheDetails(): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
}
export default ClothesCommand;