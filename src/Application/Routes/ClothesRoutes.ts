import { Router } from "express";
import ClothesCommand from "../../Infrastructure/Command/ClothesCommand";
import ClothesQuery from "../../Infrastructure/Query/ClothesQuery";
import ClothesServicesDomain from "../../Domain/Services/ClothesServicesDomain";
import ClothesServicesApplication from "../Services/ClothesServicesApplication";
import ClothesController from "../Controller/ClothesController";

const clothesRouter = Router();
const clothesCommand = new ClothesCommand();
const clothesQuery = new ClothesQuery();
const clothesServicesDomain = new ClothesServicesDomain(clothesCommand, clothesQuery);
const clothesServicesApplication = new ClothesServicesApplication(clothesServicesDomain);
const clothesController = new ClothesController(clothesServicesApplication);

clothesRouter.get('/clothes/get', clothesController.getClotheById);
clothesRouter.get('/clothes/get-list', clothesController.getClothes);
clothesRouter.get('/clothes/get-by-user-id', clothesController.getClothesByUserId);




export default clothesRouter;