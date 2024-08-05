import { Request, Response, NextFunction } from "express";
import IClothesServicesApplication from "../Interfaces/IClothesServicesApplication";
import GetClothesRequest from "../Requests/GetClothesRequest";
import AddClotheRequest from "../Requests/AddClotheRequest";
import AddMediaRequest from "../Requests/AddMediaRequest";
import RemoveMediaRequest from "../Requests/RemoveMediaRequest";
import AddReviewRequest from "../Requests/AddReviewRequest";
import ClotheResponse from "../Responses/ClotheResponse";
class ClothesController
{
    private readonly clothesServicesApplication: IClothesServicesApplication;
    constructor(clothesServicesApplication: IClothesServicesApplication)
    {
        this.clothesServicesApplication = clothesServicesApplication;
        this.getClotheById = this.getClotheById.bind(this);
        this.getClothesByUserId = this.getClothesByUserId.bind(this);
        this.getClothes = this.getClothes.bind(this);
        this.addClothe = this.addClothe.bind(this);
        this.deleteClothe = this.deleteClothe.bind(this);
        this.addMedia = this.addMedia.bind(this);
        this.removeMedia = this.removeMedia.bind(this);
        this.addReview = this.addReview.bind(this);
        this.updateClotheDetails = this.updateClotheDetails.bind(this);
    }
    public async getClotheById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {            
            const clotheId: string = req.params.clotheId as string;        
            const clotheResponse: ClotheResponse = await this.clothesServicesApplication.getClotheById(clotheId);
            res.status(200).send(clotheResponse);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async getClothesByUserId(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            const userId: string = req.query.userId as string;
            const clothesResponse: Array<ClotheResponse> = await this.clothesServicesApplication.getClothesByUserId(userId);
            res.status(200).send(clothesResponse);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async getClothes(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            const { offset, limit, category, size, gender }: GetClothesRequest = req.body;
            const getClothesRequest: GetClothesRequest = new GetClothesRequest(offset, limit, category, size, gender);
            const clothesResponse: Array<ClotheResponse> = await this.clothesServicesApplication.getClothes(getClothesRequest);            
            res.status(200).send(clothesResponse);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async addClothe(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            const { userId, name, category, expectedCategory, size, expectedSize, gender, expectedGender, description, expectedDescription, media }: AddClotheRequest = req.body;
            const addClotheRequest: AddClotheRequest = new AddClotheRequest(userId, name, category, expectedCategory, size, expectedSize, gender, expectedGender, description, 
                                                        expectedDescription, media);
            const clotheResponse: ClotheResponse = await this.clothesServicesApplication.addClothe(addClotheRequest);
            res.status(201).send(clotheResponse.id);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async deleteClothe(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            const id: string = req.params.id as string;
            await this.clothesServicesApplication.deleteClothe(id);
            res.status(200);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async addMedia(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            const { clotheId, media }: AddMediaRequest = req.body;
            const addMediaRequest: AddMediaRequest = new AddMediaRequest(clotheId, media);
            const clotheResponse: ClotheResponse = await this.clothesServicesApplication.addMediaToClothe(addMediaRequest);
            res.status(200).send(clotheResponse.id);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async removeMedia(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            const { clotheId, mediaIndex }: RemoveMediaRequest = req.body;
            const removeMediaRequest: RemoveMediaRequest = new RemoveMediaRequest(clotheId, mediaIndex);
            const clotheResponse: ClotheResponse = await this.clothesServicesApplication.removeMediaFromClothe(removeMediaRequest);
            res.status(200).send(clotheResponse.id);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async addReview(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            const { clotheId ,senderUserId, receiverUserId, puntuation, comment }: AddReviewRequest = req.body;
            const addReviewRequest = new AddReviewRequest(clotheId ,senderUserId, receiverUserId, puntuation, comment);
            const clotheResponse: ClotheResponse = await this.clothesServicesApplication.addReview(addReviewRequest);
            res.status(200).send(clotheResponse.id);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async updateClotheDetails(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            res.status(200);
        }
        catch(error)
        {
            next(error);
        }
    }
}

export default ClothesController;