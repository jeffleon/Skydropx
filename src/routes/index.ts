import Router from "express";
import { createrequestLabelController, getRequestByIdController } from "../controllers/requestLabelHttp.controller";


let router = Router();
router.post('/requestLabel', createrequestLabelController);
router.get('/requestLabel/:id', getRequestByIdController);

export default router;