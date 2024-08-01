import IClotheDocument from "./IClotheDocument";

interface IClothesQuery
{
    getClotheById(clotheId: string): Promise<IClotheDocument>;
    getClothesByUserId(userId: string): Promise<Array<IClotheDocument>>;
    getClothes(): Promise<Array<IClotheDocument>> // Falta definir DTO, debe de incluir filtros y paginado    
}
export default IClothesQuery;