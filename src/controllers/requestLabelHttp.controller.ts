import { Response, Request } from 'express';
import { saveRequestI, getRequestByIdI } from '../core/interactors';

export const createrequestLabelController = async (request:Request, response:Response) => {
    const { body } = request;
    try {
        const requestLabel = await saveRequestI(body);
        response.status(200).json(requestLabel);
    }catch(error){
        response.status(500).json(error);
    }
}

export const getRequestByIdController = async (request:Request, response:Response) => {
    const { params } = request;
    try {
        const requestLabel = await getRequestByIdI(params.id);
        if (!requestLabel){
            response.status(404).json({"response": "request not found", "status": "404"});
        } 
        response.status(200).json(requestLabel);
    }catch(error) {
        response.status(500).json(error);
    }
}

