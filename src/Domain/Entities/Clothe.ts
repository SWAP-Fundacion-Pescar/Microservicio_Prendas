import Media from "./Media";
import Review from "./Review";

class Clothe
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
    expectedDescription: string;
    isAvailable: boolean;
    media: Array<Media>;
    review?: Review;
    constructor(userId: string, name: string, category: string, expectedCategory: string, size: string, expectedSize: string, gender: string, expectedGender: string, description: string, expectedDescription: string, media: Array<Media>)
    {
        this.userId = userId;
        this.name = name;
        this.category = category;
        this.expectedCategory = expectedCategory;
        this.size = size;
        this.expectedSize = expectedSize;        
        this.gender = gender;
        this.expectedGender = expectedGender;
        this.description = description;
        this.expectedDescription = expectedDescription;
        this.isAvailable = true;
        this.media = media;
    }
}
export default Clothe;