import IGetClothesDTO from "../../Application/Interfaces/IGetClothesDTO";
import IClotheDocument from "./IClotheDocument";

interface IClothesQuery
{
    getClotheById(clotheId: string): Promise<IClotheDocument>;
    getClothesByUserId(userId: string): Promise<Array<IClotheDocument>>;
    getClothes(getClothesDTO: IGetClothesDTO): Promise<Array<IClotheDocument>>
}
export default IClothesQuery;