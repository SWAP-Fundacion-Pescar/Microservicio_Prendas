import swaggerJSDoc from "swagger-jsdoc";
import RemoveMediaRequest from "../../../Application/Requests/RemoveMediaRequest";

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Clothe API',
        version: '1.0.0',
        description: 'API for managing clothes',
    },
    servers: [
        {
            url: 'http://localhost:3001',
            description: 'Development Server',
        },
    ],
    components:{
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
        schemas:{
            AddClotheRequest:{
                type: 'object',
                required: ['name', 'category', 'expectedCategory', 'size', 'expectedSize', 'gender', 'expectedGender', 'description', 'expectedDescription', 'media'],
                properties:{
                    name:{
                        type: 'string',
                        description: 'Clothe name'
                    },
                    category:{
                        type: 'string',
                        description: 'Clothe category'
                    },
                    expectedCategory:{
                        type: 'string',
                        description: 'Expected clothe category'
                    },
                    size:{
                        type: 'string',
                        description: 'Clothe size'
                    },
                    expectedSize:{
                        type: 'string',
                        description: 'Expected clothe size'
                    },
                    gender:{
                        type: 'string',
                        description: 'Clothe gender'
                    },
                    expectedGender:{
                        type: 'string',
                        description: 'Expected clothe gender'
                    },
                    description:{
                        type: 'string',
                        description: 'Clothe description'
                    },
                    expectedDescription:{
                        type: 'string',
                        description: 'Expected clothe description'
                    },
                    media:{                        
                        type: 'string',
                        format: 'binary',
                        description: 'Clothe media'
                    },
                }
            },
            Media: 
            {
                type: 'object',
                properties: 
                {
                    url:
                    {
                        type: 'string',
                        description: 'Media URL'
                    },
                    type: 
                    {
                        type: 'string',
                        description: 'Media Type'
                    }
                }
            },
            ClotheResponse: {
                type: 'object',                
                properties:{
                    id:{
                        type: 'string',
                        description: 'Clothe id'
                    },
                    userId:{
                        type: 'string',
                        description: 'User id'
                    },
                    name:{
                        type: 'string',
                        description: 'Clothe name'
                    },
                    category:{
                        type: 'string',
                        description: 'Clothe category'
                    },
                    expectedCategory:{
                        type: 'string',
                        description: 'Expected clothe category'
                    },
                    size:{
                        type: 'string',
                        description: 'Clothe size'
                    },
                    expectedSize:{
                        type: 'string',
                        description: 'Expected clothe size'
                    },
                    gender:{
                        type: 'string',
                        description: 'Clothe gender'
                    },
                    expectedGender:{
                        type: 'string',
                        description: 'Expected clothe gender'
                    },
                    description:{
                        type: 'string',
                        description: 'Clothe description'
                    },
                    expectedDescription:{
                        type: 'string',
                        description: 'Expected clothe description'
                    },
                    media:{                        
                        type: 'array',
                        items: 
                        {
                            $ref: '#/components/schemas/Media'
                        }
                    },
                }
            },
            AddMediaRequest:{
                type: 'object',
                required: ['clotheId', 'media'],
                properties:{                    
                    clotheId:{
                        type: 'string',
                        description: 'Clothe id'
                    },
                    media:{                        
                        type: 'string',
                        format: 'binary',
                        description: 'Clothe media'
                    },
                }
            },    
            AddReviewRequest:{
                type: 'object',
                required: ['clotheId', 'senderUserId', 'receiverUserId', 'puntuation', 'comment'],
                properties:{
                    clotheId:{
                        type: 'string',
                        description: 'Clothe id'
                    },
                    senderUserId:{
                        type: 'string',
                        description: 'Sender user id'
                    },
                    receiverUserId:{                        
                        type: 'string',
                        description: 'Receiver user Id'
                    },
                    puntuation:{                        
                        type: 'number',
                        description: 'Exchange puntuation'
                    },
                    comment:{                        
                        type: 'string',
                        description: 'Exchange comment'
                    },
                }
            },    
            GetClothesRequest:{
                type: 'object',
                properties:{
                    offset:{
                        type: 'number',
                        description: 'Pagination offset'
                    },
                    limit:{
                        type: 'number',
                        description: 'Pagination limit'
                    },
                    category:{                        
                        type: 'string',
                        description: 'Clothes category'
                    },
                    size:{                        
                        type: 'string',
                        description: 'Clothes size'
                    },
                    gender:{                        
                        type: 'string',
                        description: 'Clothes gender'
                    },
                }
            }, 
            RemoveMediaRequest:{
                type: 'object',
                required: ['clotheId', 'mediaIndex'],
                properties:{                    
                    clotheId:{
                        type: 'string',
                        description: 'Clothe id'
                    },
                    mediaIndex:{                        
                        type: 'string',
                        description: 'Media index'
                    }
                }
            },     
            UpdateClotheRequest:{
                type: 'object',
                required: ['clotheId'],
                properties:{
                    clotheId:
                    {
                        type: 'string',
                        description: 'Clothe id'
                    },
                    name:{
                        type: 'string',
                        description: 'Clothe name'
                    },
                    category:{
                        type: 'string',
                        description: 'Clothe category'
                    },
                    expectedCategory:{
                        type: 'string',
                        description: 'Expected clothe category'
                    },
                    size:{
                        type: 'string',
                        description: 'Clothe size'
                    },
                    expectedSize:{
                        type: 'string',
                        description: 'Expected clothe size'
                    },
                    gender:{
                        type: 'string',
                        description: 'Clothe gender'
                    },
                    expectedGender:{
                        type: 'string',
                        description: 'Expected clothe gender'
                    },
                    description:{
                        type: 'string',
                        description: 'Clothe description'
                    },
                    expectedDescription:{
                        type: 'string',
                        description: 'Expected clothe description'
                    }
                }
            },  
            ClothesResponse:
            {
                type: 'array',
                items: 
                {
                    $ref: '#/components/schemas/ClotheResponse'
                }
            }
        }
    }
}
const options = {
    swaggerDefinition,
    apis: ['./src/Application/Routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;