import mongoose, { Schema } from "mongoose";
import IClotheDocument from "../../Interfaces/IClotheDocument";
import IMediaDocument from "../../Interfaces/IMediaDocument";

const mediaSchema: Schema<IMediaDocument> = new mongoose.Schema(
    {
        url: { type: String, required: true },
        type: { type: String, required: true }
    })
const clotheSchema: Schema<IClotheDocument> = new mongoose.Schema
    (
        {
            userId: { type: String, required: true },
            name: { type: String, required: true },
            category: { type: String, required: true },
            expectedCategory: { type: String, required: true },
            size: { type: String, required: true },
            expectedSize: { type: String, required: true },
            gender: { type: String, required: true },
            expectedGender: { type: String, required: true },
            description: { type: String, required: true },
            color: { type: String, required: true},
            expectedColor: { type: String, required: true},
            isAvailable: { type: Boolean, default: true },
            media: { type: [mediaSchema], required: true },
            review: { type: Object }
        }
    );

const ClotheModel = mongoose.model('Clothes', clotheSchema);
export default ClotheModel;