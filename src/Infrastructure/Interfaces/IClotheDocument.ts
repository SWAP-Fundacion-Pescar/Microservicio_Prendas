import { Document } from "mongoose";
import Media from "../../Domain/Entities/Media";
import Review from "../../Domain/Entities/Review";

interface IClotheDocument extends Document
{
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
}

export default IClotheDocument;