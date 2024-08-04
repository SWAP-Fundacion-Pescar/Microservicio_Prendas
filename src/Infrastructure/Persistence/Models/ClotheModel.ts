import mongoose, { Schema } from "mongoose";
import IClotheDocument from "../../Interfaces/IClotheDocument";
import Review from "../../../Domain/Entities/Review";
import Media from "../../../Domain/Entities/Media";

const clotheSchema: Schema<IClotheDocument> = new mongoose.Schema
(    
    {
        userId: {type: String, required: true},
        name: {type: String, required: true},
        category: {type: String, required: true},
        expectedCategory: {type: String, required: true},
        size: {type: String, required: true},
        expectedSize: {type: String, required: true},
        gender: {type: String, required: true},
        expectedGender: {type: String, required: true},
        description: {type: String, required: true},
        expectedDescription: {type: String, required: true},
        isAvailable: {type: Boolean, default: true},
        media: {type: [Media], required: true},
        review: {type: Review}
    }
);

const ClotheModel = mongoose.model('Clothes', clotheSchema);
export default ClotheModel;