import { Router } from "express";
import ClothesCommand from "../../Infrastructure/Command/ClothesCommand";
import ClothesQuery from "../../Infrastructure/Query/ClothesQuery";
import ClothesServicesDomain from "../../Domain/Services/ClothesServicesDomain";
import ClothesServicesApplication from "../Services/ClothesServicesApplication";
import ClothesController from "../Controller/ClothesController";
import upload from "../../Infrastructure/Config/multerStorage";
import { authenticateJwt } from "../Middleware/PassportMiddleware";
import { validateAddClothe, validateAddMedia, validateAddReview, validateDeleteClothe, validateGetClotheById, validateGetClothes, validateGetClothesByUserId, validateUpdateClotheDetails } from "../Middleware/Validator/ClothesValidator";
import validationErrorHandler from "../Middleware/Validator/ValidationErrorHandler";


const clothesRouter = Router();
const clothesCommand = new ClothesCommand();
const clothesQuery = new ClothesQuery();
const clothesServicesDomain = new ClothesServicesDomain(clothesCommand, clothesQuery);
const clothesServicesApplication = new ClothesServicesApplication(clothesServicesDomain);
const clothesController = new ClothesController(clothesServicesApplication);

/**
 * @swagger
 * tags:
 *   name: Clothes
 *   description: Clothes management
 */

clothesRouter.get('/clothes/:id', validateGetClotheById, validationErrorHandler, clothesController.getClotheById);
/**
 * @swagger
 * /api/clothes/{id}:
 *   get:
 *     summary: Get a clothe
 *     security:
 *       - bearerAuth: [] 
 *     tags: [Clothes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Clothe Id 
 *     responses:
 *       200:
 *         description: Clothe retrieved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClotheResponse'
 */
clothesRouter.get('/clothes', validateGetClothes, validationErrorHandler, clothesController.getClothes);
/**
 * @swagger
 * /api/clothes/:
 *   get:
 *     summary: Get clothes by parameters
 *     tags: [Clothes]
 *     parameters:
 *       - in: query
 *         name: offset
 *         schema:
 *           type: number
 *         description: Pagination offset
 *       - in: query
 *         name: limit
 *         schema:
 *           type: number
 *         description: Pagination limit
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Clothes category
 *       - in: query
 *         name: size
 *         schema:
 *           type: string
 *         description: Clothes size
 *       - in: query
 *         name: gender
 *         schema:
 *           type: string
 *         description: Clothes gender                           
 *     responses:
 *       200:
 *         description: Retrieved clothes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClothesResponse'
 */

clothesRouter.get('/clothes/users/:userId', validateGetClothesByUserId, validationErrorHandler, clothesController.getClothesByUserId);
/**
 * @swagger
 * /api/clothes/users/{userId}:
 *   get:
 *     summary: Get clothes from a User
 *     tags: [Clothes]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: User Id 
 *     responses:
 *       200:
 *         description: Clothe retrieved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClothesResponse'
 */

clothesRouter.post('/clothes', authenticateJwt, upload.single('media'), validateAddClothe, validationErrorHandler, clothesController.addClothe);
/**
 * @swagger
 * /api/clothes:
 *   post:
 *     summary: Create a clothe
 *     security:
 *       - bearerAuth: [] 
 *     tags: [Clothes]
 *     requestBody:
 *       required: true
 *       content: 
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/AddClotheRequest'
 *     responses:
 *       201:
 *         description: Clothe created
 *         content:
 *           application/json:
 *             schema:
 *               type: 'string'
 *               example: 'Clothe Id' 
 */
clothesRouter.delete('/clothes/:id', authenticateJwt, validateDeleteClothe, validationErrorHandler, clothesController.deleteClothe);
/**
 * @swagger
 * /api/clothes/{id}:
 *   delete:
 *     summary: Delete a clothe
 *     security:
 *       - bearerAuth: [] 
 *     tags: [Clothes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Clothe Id 
 *     responses:
 *       200:
 *         description: Clothe deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: 'string'
 *               example: 'Deleted' 
 */
clothesRouter.put('/clothes/addMedia', authenticateJwt, upload.single('media'), validateAddMedia, validationErrorHandler, clothesController.addMedia);
/**
 * @swagger
 * /api/clothes/addMedia:
 *   put:
 *     summary: Add media to a clothe
 *     security:
 *       - bearerAuth: [] 
 *     tags: [Clothes]
 *     requestBody:
 *       required: true
 *       content: 
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/AddMediaRequest'
 *     responses:
 *       201:
 *         description: Media added
 *         content:
 *           application/json:
 *             schema:
 *               type: 'string'
 *               example: '12345abcdef'
 */
clothesRouter.put('/clothes/removeMedia', authenticateJwt, clothesController.removeMedia);
/**
 * @swagger
 * /api/clothes/removeMedia:
 *   put:
 *     summary: Remove media from a clothe
 *     security:
 *       - bearerAuth: [] 
 *     tags: [Clothes]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RemoveMediaRequest'
 *     responses:
 *       201:
 *         description: Media added
 *         content:
 *           application/json:
 *             schema:
 *               type: 'string'
 *               example: '12345abcdef'
 */
clothesRouter.put('/clothes/review', authenticateJwt, validateAddReview, validationErrorHandler, clothesController.addReview);
/**
 * @swagger
 * /api/clothes/review:
 *   put:
 *     summary: Add review to a clothe
 *     security:
 *       - bearerAuth: [] 
 *     tags: [Clothes]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddReviewRequest'
 *     responses:
 *       201:
 *         description: Media added
 *         content:
 *           application/json:
 *             schema:
 *               type: 'string'
 *               example: '12345abcdef'
 */
clothesRouter.put('/clothes/update', authenticateJwt, validateUpdateClotheDetails, validationErrorHandler, clothesController.updateClotheDetails);
/**
 * @swagger
 * /api/clothes/update:
 *   put:
 *     summary: Update a clothe
 *     security:
 *       - bearerAuth: [] 
 *     tags: [Clothes]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateClotheRequest'
 *     responses:
 *       201:
 *         description: Media added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClotheResponse'
 */

export default clothesRouter;
