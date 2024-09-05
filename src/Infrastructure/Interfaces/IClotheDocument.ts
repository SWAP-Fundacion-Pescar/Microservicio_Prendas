import { Document, Types } from "mongoose";
import Review from "../../Domain/Entities/Review";
import IMediaDocument from "./IMediaDocument";

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
    color: string;
    expectedColor: string;
    isAvailable: boolean;
    media: Types.DocumentArray<IMediaDocument>;
    review?: Review;
}

export default IClotheDocument;