import GetClothesRequest from "../../Application/Requests/GetClothesRequest";
import IClotheDocument from "./IClotheDocument";

interface IClothesQuery
{
    getClotheById(clotheId: string): Promise<IClotheDocument>;
    getClothesByUserId(userId: string): Promise<Array<IClotheDocument>>;
    getClothes(getClothesRequest: GetClothesRequest): Promise<Array<IClotheDocument>>
}
export default IClothesQuery;