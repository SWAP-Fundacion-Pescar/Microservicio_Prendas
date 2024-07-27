import Media from "./Media";
import Review from "./Review";

class Clothe
{
    userId: String;
    name: String;
    category: String;
    expectedCategory: String;
    size: String;
    gender: String;
    description: String;
    isAvailable: boolean;
    media: Array<Media>;
    review?: Review;
    constructor(userId: string, name: string, category: string, expectedCategory: string, size: string, gender: string, description: string, media: Array<Media>)
    {
        this.userId = userId;
        this.name = name;
        this.category = category;
        this.expectedCategory = expectedCategory;
        this.size = size;
        this.gender = gender;
        this.description = description;
        this.isAvailable = true;
        this.media = media;
    }
}
export default Clothe;