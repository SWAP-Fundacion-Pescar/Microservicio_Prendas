import { Request, Response, NextFunction } from "express";
import IClothesServicesApplication from "../Interfaces/IClothesServicesApplication";
import GetClothesRequest from "../Requests/GetClothesRequest";
import AddClotheRequest from "../Requests/AddClotheRequest";
import AddMediaRequest from "../Requests/AddMediaRequest";
import RemoveMediaRequest from "../Requests/RemoveMediaRequest";
import AddReviewRequest from "../Requests/AddReviewRequest";
import ClotheResponse from "../Responses/ClotheResponse";
import UpdateClotheRequest from "../Requests/UpdateClotheRequest";
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier'

interface User {
    id: string;
}
// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
});
class ClothesController {
    private readonly clothesServicesApplication: IClothesServicesApplication;
    constructor(clothesServicesApplication: IClothesServicesApplication) {
        this.clothesServicesApplication = clothesServicesApplication;
        this.getClotheById = this.getClotheById.bind(this);
        this.getClothesByUserId = this.getClothesByUserId.bind(this);
        this.getClothes = this.getClothes.bind(this);
        this.addClothe = this.addClothe.bind(this);
        this.deleteClothe = this.deleteClothe.bind(this);
        // this.addMedia = this.addMedia.bind(this);
        this.removeMedia = this.removeMedia.bind(this);
        this.addReview = this.addReview.bind(this);
        this.updateClotheDetails = this.updateClotheDetails.bind(this);
    }
    public async getClotheById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const clotheId: string = req.params.id as string;
            const clotheResponse: ClotheResponse = await this.clothesServicesApplication.getClotheById(clotheId);
            res.status(200).send(clotheResponse);
        }
        catch (error) {
            next(error);
        }
    }
    public async getClothesByUserId(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userId: string = req.params.userId as string;
            const clothesResponse: Array<ClotheResponse> = await this.clothesServicesApplication.getClothesByUserId(userId);
            res.status(200).send(clothesResponse);
        }
        catch (error) {
            next(error);
        }
    }
    public async getClothes(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { offset, limit, category, size, gender, name } = req.query;
            const getClothesRequest: GetClothesRequest = new GetClothesRequest(
                offset ? parseInt(offset as string, 10) : undefined,
                limit ? parseInt(limit as string, 10) : undefined,
                category as string,
                size as string,
                gender as string,
                name as string
            );
            const clothesResponse: Array<ClotheResponse> = await this.clothesServicesApplication.getClothes(getClothesRequest);
            res.status(200).send(clothesResponse);
        }
        catch (error) {
            next(error);
        }
    }
    public async addClothe(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = req.user as User;
            const { name, category, expectedCategory, size, expectedSize, gender, expectedGender, description, color, expectedColor }: AddClotheRequest = req.body;
            const result = await new Promise((resolve, reject) => {
                if (!req.file) throw new Error("File not found")
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: 'test' },  // Cloudinary folder
                    (error, result) => {
                        if (error) return reject(error);
                        resolve(result);
                    }
                );

                // Stream the file's buffer to Cloudinary
                streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
            });

            // Respond with the secure URL of the uploaded file
            const url = (result as any).secure_url;            
            const addClotheRequest: AddClotheRequest = new AddClotheRequest(user.id, name, category, expectedCategory, size, expectedSize, gender, expectedGender, description, color, expectedColor, url);
            const clotheResponse: ClotheResponse = await this.clothesServicesApplication.addClothe(addClotheRequest);
            res.status(201).send(clotheResponse.id);
        }
        catch (error) {
            next(error);
        }
    }
    public async deleteClothe(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            //TODO Verificar que el usuario sea due;o de la prenda
            const id: string = req.params.id as string;
            await this.clothesServicesApplication.deleteClothe(id);
            res.status(200).send('Deleted');
        }
        catch (error) {
            next(error);
        }
    }
    // public async addMedia(req: Request, res: Response, next: NextFunction): Promise<void> {
    //     try {
    //         const user = req.user as User;
    //         const { clotheId }: AddMediaRequest = req.body;
    //         if (!req.file) throw new Error('Must contain a file');
    //         const addMediaRequest: AddMediaRequest = new AddMediaRequest(user.id, clotheId, req.file);
    //         const clotheResponse: ClotheResponse = await this.clothesServicesApplication.addMediaToClothe(addMediaRequest);
    //         res.status(200).send(clotheResponse.id);
    //     }
    //     catch (error) {
    //         next(error);
    //     }
    // }
    public async removeMedia(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = req.user as User;
            const { clotheId, mediaId }: RemoveMediaRequest = req.body;
            const removeMediaRequest: RemoveMediaRequest = new RemoveMediaRequest(user.id, clotheId, mediaId);
            const clotheResponse: ClotheResponse = await this.clothesServicesApplication.removeMediaFromClothe(removeMediaRequest);
            res.status(200).send(clotheResponse.id);
        }
        catch (error) {
            next(error);
        }
    }
    public async addReview(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { clotheId, senderUserId, receiverUserId, puntuation, comment }: AddReviewRequest = req.body;
            const addReviewRequest = new AddReviewRequest(clotheId, senderUserId, receiverUserId, puntuation, comment);
            const clotheResponse: ClotheResponse = await this.clothesServicesApplication.addReview(addReviewRequest);
            res.status(200).send(clotheResponse.id);
        }
        catch (error) {
            next(error);
        }
    }
    public async updateClotheDetails(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = req.user as User;
            const { clotheId, name, category, expectedCategory, size, expectedSize, gender, expectedGender, description, color, expectedColor }: UpdateClotheRequest = req.body;
            const updateClotheRequest: UpdateClotheRequest =
            {
                userId: user.id,
                clotheId: clotheId,
                name: name,
                category: category,
                expectedCategory: expectedCategory,
                size: size,
                expectedSize: expectedSize,
                gender: gender,
                expectedGender: expectedGender,
                description: description,
                color: color,
                expectedColor: expectedColor
            }
            const clotheResponse: ClotheResponse = await this.clothesServicesApplication.updateClotheDetails(updateClotheRequest);
            res.status(200).send(clotheResponse);
        }
        catch (error) {
            next(error);
        }
    }
}

export default ClothesController;