import { Router } from "express";
import ClothesCommand from "../../Infrastructure/Command/ClothesCommand";
import ClothesQuery from "../../Infrastructure/Query/ClothesQuery";
import ClothesServicesDomain from "../../Domain/Services/ClothesServicesDomain";
import ClothesServicesApplication from "../Services/ClothesServicesApplication";
import ClothesController from "../Controller/ClothesController";
import upload from "../../Infrastructure/Config/multerStorage";
import { authenticateJwt } from "../Middleware/PassportMiddleware";


const clothesRouter = Router();
const clothesCommand = new ClothesCommand();
const clothesQuery = new ClothesQuery();
const clothesServicesDomain = new ClothesServicesDomain(clothesCommand, clothesQuery);
const clothesServicesApplication = new ClothesServicesApplication(clothesServicesDomain);
const clothesController = new ClothesController(clothesServicesApplication);

clothesRouter.get('/clothes/:id', clothesController.getClotheById);
clothesRouter.get('/clothes', clothesController.getClothes);
clothesRouter.get('/clothes/users/:userId', clothesController.getClothesByUserId);

clothesRouter.post('/clothes', authenticateJwt, upload.single('media'), clothesController.addClothe);
clothesRouter.delete('/clothes/:id', clothesController.deleteClothe);
clothesRouter.put('/clothes/addMedia', authenticateJwt, upload.single('media'), clothesController.addMedia);
clothesRouter.put('/clothes/removeMedia', authenticateJwt, clothesController.removeMedia);
clothesRouter.put('/clothes/review', authenticateJwt, clothesController.addReview);
clothesRouter.put('/clothes/update', authenticateJwt, clothesController.updateClotheDetails);

export default clothesRouter;
