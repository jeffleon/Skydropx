import express from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';
import createrequestLabelController from './controllers/requestLabelHttp.controller';

dotEnv.config();
const PORT = 8080;

const app = express();
app.use(bodyParser.json());

app.post('/requestLabel', createrequestLabelController);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
