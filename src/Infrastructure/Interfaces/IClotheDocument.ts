import Media from "../../Domain/Entities/Media";
import Review from "../../Domain/Entities/Review";

interface IClotheDocument
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
}

export default IClotheDocument;