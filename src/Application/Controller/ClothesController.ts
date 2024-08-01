import { Request, Response, NextFunction } from "express";
import IClothesServicesApplication from "../Interfaces/IClothesServicesApplication";

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
            res.status(200);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async getClothesByUserId(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            res.status(200);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async getClothes(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            res.status(200);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async addClothe(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            res.status(200);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async deleteClothe(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
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
            res.status(200);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async removeMediaFromClothe(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            res.status(200);
        }
        catch(error)
        {
            next(error);
        }
    }
    public async addReview(req: Request, res: Response, next: NextFunction): Promise<void> {
        try
        {
            res.status(200);
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