import NotFoundException from "../../Application/Exceptions/NotFoundException";
import IGetClothesDTO from "../../Application/Interfaces/IGetClothesDTO";
import IClotheDocument from "../Interfaces/IClotheDocument";
import IClothesQuery from "../Interfaces/IClothesQuery";
import ClotheModel from "../Persistence/Models/ClotheModel";

class ClothesQuery implements IClothesQuery
{
    async getClotheById(clotheId: string): Promise<IClotheDocument> {
        const retrievedClothe: IClotheDocument | null  = await ClotheModel.findOne({ _id: clotheId });
        if(!retrievedClothe) throw new NotFoundException('No se ha encontrado esa prenda');
        return retrievedClothe;
    }
    async getClothesByUserId(userId: string): Promise<Array<IClotheDocument>> {
        const retrievedClothes: Array<IClotheDocument> | null = await ClotheModel.findOne({ userId: userId });
        if(!retrievedClothes) throw new NotFoundException('No se han encontrado prendas para ese usuario');
        return retrievedClothes;
    }
    getClothes(getClothesDTO: IGetClothesDTO): Promise<Array<IClotheDocument>> {
        throw new Error("Method not implemented.");
    }

}
export default ClothesQuery;