import { Response, Request } from 'express';
import {downloadFileI } from "../../core/interactors"

/**
 * Controller download the file if exists if not 
 * return 404 or if return a error send a 500 with the error
 * @param request 
 * @param response 
 */
export const downloadFileController = async(request:Request, response:Response) => {
    const {params} = request
    try {
        const res = await downloadFileI(params.id);
        if (!res){
            response.status(404).json({"message": "dont find request or not is complete yet", "status": 404})
        } 
        response.attachment(`${params.id}.zip`);
        res.pipe(response);
    }catch(e){
        response.status(500).json({"error":`Something goes wrong ${e}`, "status": 500});
    }
    
}