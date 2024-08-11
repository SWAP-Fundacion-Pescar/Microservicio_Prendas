import { Query } from "mongoose";
import NotFoundException from "../../Application/Exceptions/NotFoundException";
import IClotheDocument from "../Interfaces/IClotheDocument";
import IClothesQuery from "../Interfaces/IClothesQuery";
import ClotheModel from "../Persistence/Models/ClotheModel";
import GetClothesRequest from "../../Application/Requests/GetClothesRequest";

class ClothesQuery implements IClothesQuery
{
    async getClotheById(clotheId: string): Promise<IClotheDocument> {
        const retrievedClothe: IClotheDocument | null  = await ClotheModel.findOne({ _id: clotheId });
        if(!retrievedClothe) throw new NotFoundException('No se ha encontrado esa prenda');
        return retrievedClothe;
    }
    async getClothesByUserId(userId: string): Promise<Array<IClotheDocument>> {
        const retrievedClothes: Array<IClotheDocument> | null = await ClotheModel.find({ userId: userId });
        if(!retrievedClothes) throw new NotFoundException('No se han encontrado prendas para ese usuario');
        return retrievedClothes;
    }
    async getClothes(getClothesRequest: GetClothesRequest): Promise<Array<IClotheDocument>> {
        const { category, size, gender }: GetClothesRequest = getClothesRequest;
        const offset = getClothesRequest.offset != null ? getClothesRequest.offset : 0;
        const limit = getClothesRequest.limit != null ? getClothesRequest.limit : 10;
        let query: Query<IClotheDocument[], IClotheDocument> = ClotheModel.find();
        if(category) query = query.where('category').equals(category); 
        if(size) query = query.where('size').equals(size);
        if(gender) query = query.where('gender').equals(gender);
        query = query.where('isAvailable').equals(true);
        const retrievedClothes = await query.skip(offset).limit(limit).exec();       
        if(!retrievedClothes) throw new NotFoundException('No se han encontrado prendas');
        return retrievedClothes;
    }
}
export default ClothesQuery;