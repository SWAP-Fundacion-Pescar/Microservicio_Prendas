import Clothe from "../../Domain/Entities/Clothe";
import Media from "../../Domain/Entities/Media";

class ClotheResponse
{
    id?: string;
    userId: string;
    name: string;
    category: string;
    expectedCategory: string;
    size: string;
    expectedSize: string;
    gender: string;
    expectedGender: string;
    description: string;
    color: string;
    expectedColor: string;
    media: Array<Media>;
    constructor(clothe: Clothe)
    {
        this.id = clothe.id;
        this.userId = clothe.userId;
        this.name = clothe.name;
        this.category = clothe.category;
        this.expectedCategory = clothe.expectedCategory;
        this.size = clothe.size;
        this.expectedSize = clothe.expectedSize;        
        this.gender = clothe.gender;
        this.expectedGender = clothe.expectedGender;
        this.description = clothe.description;
        this.color = clothe.color;
        this.expectedColor = clothe.expectedColor;
        this.media = clothe.media;
    }
}
export default ClotheResponse;