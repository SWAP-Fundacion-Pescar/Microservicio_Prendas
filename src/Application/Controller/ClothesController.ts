import { Request, Response, NextFunction } from "express";
import IClothesServicesApplication from "../Interfaces/IClothesServicesApplication";
import Clothe from "../../Domain/Entities/Clothe";
import IGetClothesDTO from "../Interfaces/IGetClothesDTO";
import GetClothesDTO from "../DTO/GetClothesDTO";
import ICreateClotheDTO from "../Interfaces/ICreateClotheDTO";
import CreateClotheDTO from "../DTO/CreateClotheDTO";
import IAddMediaToClotheDTO from "../Interfaces/IAddMediaToClotheDTO";
import AddMediaToClotheDTO from "../DTO/AddMediaToClotheDTO";
import IRemoveMediaFromClotheDTO from "../Interfaces/IRemoveMediaFromClotheDTO";
import RemoveMediaFromClotheDTO from "../DTO/RemoveMediaFromClotheDTO";
import IReview from "../../Domain/Interfaces/IReview";
import Review from "../../Domain/Entities/Review";

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
        this.addMediaToClothe = this.addMediaToClothe.bind(this);
        this.removeMediaFromClothe = this.removeMediaFromClothe.bind(this);
        this.addReview = this.addReview.bind(this);
        this.updateClotheDetails = this.updateClotheDetails.bind(this);
    }
    public async getClotheById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {            
            const clotheId: string = req.query.clotheId as string;        
            const retrievedClothe: Clothe = await this.clothesServicesApplication.getClotheById(clotheId);
            res.status(200).send(retrievedClothe);
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
            const retrievedClothes: Array<Clothe> = await this.clothesServicesApplication.getClothesByUserId(userId);
            res.status(200).send(retrievedClothes);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async getClothes(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            const { offset, limit, category, size, gender }: IGetClothesDTO = req.body;
            const getClothesDTO: IGetClothesDTO = new GetClothesDTO(offset, limit, category, size, gender);
            const retrievedClothes: Array<Clothe> = await this.clothesServicesApplication.getClothes(getClothesDTO);            
            res.status(200).send(retrievedClothes);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async addClothe(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            const { userId, name, category, expectedCategory, size, expectedSize, gender, expectedGender, description, expectedDescription, media }: ICreateClotheDTO = req.body;
            const createClotheDTO: ICreateClotheDTO = new CreateClotheDTO(userId, name, category, expectedCategory, size, expectedSize, gender, expectedGender, description, 
                                                        expectedDescription, media);
            const createdClothe: Clothe = await this.clothesServicesApplication.addClothe(createClotheDTO);
            res.status(201).send(createdClothe.id);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async deleteClothe(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            const id: string = req.query.id as string;
            await this.clothesServicesApplication.deleteClothe(id);
            res.status(200);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async addMediaToClothe(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            const { clotheId, media }: IAddMediaToClotheDTO = req.body;
            const addMediaToClotheDTO: IAddMediaToClotheDTO = new AddMediaToClotheDTO(clotheId, media);
            const updatedClothe: Clothe = await this.clothesServicesApplication.addMediaToClothe(addMediaToClotheDTO);
            res.status(200).send(updatedClothe.id);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async removeMediaFromClothe(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            const { clotheId, mediaIndex }: IRemoveMediaFromClotheDTO = req.body;
            const removeMediaFromClotheDTO: IRemoveMediaFromClotheDTO = new RemoveMediaFromClotheDTO(clotheId, mediaIndex);
            const updatedClothe = await this.clothesServicesApplication.removeMediaFromClothe(removeMediaFromClotheDTO);
            res.status(200).send(updatedClothe.id);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async addReview(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            const { senderUserId, receiverUserId, puntuation, comment }: IReview = req.body;
            const review = new Review(senderUserId, receiverUserId, puntuation, comment);
            const updatedClothe = await this.clothesServicesApplication.addReview(review);
            res.status(200).send(updatedClothe.id);
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