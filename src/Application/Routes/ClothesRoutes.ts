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

clothesRouter.get('/clothes/:id', clothesController.getClotheById);
clothesRouter.get('/clothes', clothesController.getClothes);
clothesRouter.get('/clothes/users/:id', clothesController.getClothesByUserId);

clothesRouter.post('/clothes', clothesController.addClothe);
clothesRouter.delete('/clothes/:id', clothesController.deleteClothe);
clothesRouter.put('/clothes/addMedia', clothesController.addMedia);
clothesRouter.put('/clothes/removeMedia', clothesController.removeMedia);
clothesRouter.put('/clothes/review', clothesController.addReview);

export default clothesRouter;