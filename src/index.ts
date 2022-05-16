import express from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';

dotEnv.config();
const PORT = 8080;

const app = express();
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
