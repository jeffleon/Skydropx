import express from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';
import {createrequestLabelController, getRequestByIdController} from './controllers/requestLabelHttp.controller';
import requestLabelSequelize from './dataSources/orm/requestLabelSequelize.datasource';
import Bucket from './dataSources/aws/bucket.datasource';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import router from './routes';

const swaggerDocument = YAML.load('./swagger.yaml');

dotEnv.config();
const PORT = 8080;

export const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json());

app.use('/', router);


const sequilizeConection = new requestLabelSequelize();
const bucket = new  Bucket();
sequilizeConection.getConection();
bucket.createBucket();


app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
