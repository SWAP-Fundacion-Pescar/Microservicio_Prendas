import Clothe from "../../Domain/Entities/Clothe";

interface IClothesServicesApplication
{
    // Todos los Promise<void> deben de ser reemplazados por un DTO apropiado
    getClotheById(clotheId: string): Promise<void>;
    getClothesByUserId(userId: string): Promise<Array<void>>;
    getClothes(): Promise<Array<void>> // Falta definir DTO, debe de incluir filtros y paginado  

    addClothe(clothe: Clothe): Promise<void>;        
    deleteClothe(clotheId: string): Promise<void>;
    addMediaToClothe(): Promise<void>; // Falta definir DTO
    removeMediaFromClothe(): Promise<void>; // Falta definir DTO
    addReview(): Promise<void>; // Falta definir DTO
    updateClotheDetails(): Promise<void>; // Falta definir DTO
}
export default IClothesServicesApplication;