import express from 'express';
import requestLogger from './Application/Middleware/RequestLogger';
import errorHandler from './Application/Middleware/ErrorHandler';
import MongoDB from './Infrastructure/Persistence/Config/MongoDB';
import swaggerUi from 'swagger-ui-express';
import clothesRouter from './Application/Routes/ClothesRoutes';
MongoDB();
const app = express();

app.use(express.json());
app.use(requestLogger);
//     // app.use('/api', userRouter);
app.use(errorHandler);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.get('/swagger.json', (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(swaggerSpec);
// });
app.use('/api', clothesRouter);
export default app;