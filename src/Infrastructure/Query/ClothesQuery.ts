import IClotheDocument from "../Interfaces/IClotheDocument";
import IClothesQuery from "../Interfaces/IClothesQuery";

class ClothesQuery implements IClothesQuery
{
    getClotheById(clotheId: string): Promise<IClotheDocument> {
        throw new Error("Method not implemented.");
    }
    getClothesByUserId(userId: string): Promise<Array<IClotheDocument>> {
        throw new Error("Method not implemented.");
    }
    getClothes(): Promise<Array<IClotheDocument>> {
        throw new Error("Method not implemented.");
    }

}
export default ClothesQuery;