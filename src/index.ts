import express from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';
import createrequestLabelController from './controllers/requestLabelHttp.controller';
import requestLabelSequelize from './dataSources/orm/requestLabelSequelize.datasource';
import Bucket from './dataSources/aws/bucket.datasource';

dotEnv.config();
const PORT = 8080;

const app = express();
app.use(bodyParser.json());

app.post('/requestLabel', createrequestLabelController);

let sequilizeConection = new requestLabelSequelize();
let bucket = new  Bucket();
sequilizeConection.getConection();
bucket.createBucket();


app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
