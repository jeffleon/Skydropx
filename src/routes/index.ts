import Router from "express";
import { createrequestLabelController, getRequestByIdController } from "../controllers/requestLabel/requestLabelHttp.controller";
import { downloadFileController } from "../controllers/bucket/downloadHttp.controller";


const router = Router();
router.post('/requestLabel', createrequestLabelController);
router.get('/requestLabel/:id', getRequestByIdController);
router.get('/download/:id', downloadFileController);

export default router;