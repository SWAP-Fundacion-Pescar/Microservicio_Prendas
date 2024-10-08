import { body, param, query } from "express-validator";

const validateGetClotheById = [
    param('id').isString().notEmpty().withMessage('Id debe de ser un string')
];
const validateGetClothes = [
    query('offset').optional().isNumeric().withMessage('Offset debe de ser un numero'),
    query('limit').optional().isNumeric().withMessage('Limit debe de ser un numero'),
    query('category').optional().isString().withMessage('Category debe de ser un string'),
    query('size').optional().isString().withMessage('Size debe de ser un string'),
    query('gender').optional().isString().withMessage('Gender debe de ser un string')
];
const validateAddClothe = [
    body('name').isString().withMessage('Name debe de ser un string'),
    body('category').isString().withMessage('Category debe de ser un string'),
    body('expectedCategory').isString().withMessage('ExpectedCategory debe de ser un string'),
    body('size').isString().withMessage('Size debe de ser un string'),
    body('expectedSize').isString().withMessage('ExpectedSize debe de ser un string'),
    body('gender').isString().withMessage('Gender debe de ser un string'),
    body('expectedGender').isString().withMessage('ExpectedGender debe de ser un string'),
    body('description').isString().withMessage('Description debe de ser un string'),
    body('color').isString().withMessage('color debe de ser un string'),
    body('expectedColor').isString().withMessage('expectedColor debe de ser un string')
];
const validateGetClothesByUserId = [
    param('userId').isString().notEmpty().withMessage('UserId debe de ser un string')
];
const validateDeleteClothe = [
    param('id').isString().notEmpty().withMessage('Id debe de ser un string')
];
//TODO: Terminar despues de actualizar el esquema de Clothe
const validateAddMedia = [
    body('clotheId').isString().notEmpty().withMessage('ClotheId debe de ser un string')
];
const validateAddReview = [
    body('clotheId').isString().notEmpty().withMessage('ClotheId debe de ser un string'),
    body('senderUserId').isString().notEmpty().withMessage('SenderUserId debe de ser un string'),
    body('receiverUserId').isString().notEmpty().withMessage('ReceiverUserId debe de ser un string'),
    body('puntuation').isString().notEmpty().withMessage('Puntuation debe de ser un string'),
    body('comment').isString().notEmpty().withMessage('Comment debe de ser un string'),
];
const validateUpdateClotheDetails = [
    body('clotheId').isString().notEmpty().withMessage('ClotheId debe de ser un string'),
    body('name').isString().withMessage('Name debe de ser un string'),
    body('category').isString().withMessage('Category debe de ser un string'),
    body('expectedCategory').isString().withMessage('ExpectedCategory debe de ser un string'),
    body('size').isString().withMessage('Size debe de ser un string'),
    body('expectedSize').isString().withMessage('ExpectedSize debe de ser un string'),
    body('gender').isString().withMessage('Gender debe de ser un string'),
    body('expectedGender').isString().withMessage('ExpectedGender debe de ser un string'),
    body('description').isString().withMessage('Description debe de ser un string'),
    body('color').isString().notEmpty().withMessage('color debe de ser un string'),
    body('expectedColor').isString().notEmpty().withMessage('expectedColor debe de ser un string')
];
export { validateGetClotheById, validateGetClothes, validateAddClothe, validateGetClothesByUserId, validateDeleteClothe, validateAddMedia, validateAddReview, validateUpdateClotheDetails };