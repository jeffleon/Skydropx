import { Response, Request } from 'express';
import { saveRequestI, getRequestByIdI } from '../../core/interactors';

/**
 * send the body for do a request with an array of labels if save the request the response is
 * an object with the status of request if its not return a 500 with the error
 * @param request
 * @param response
 */
export const createrequestLabelController = async (request:Request, response:Response) => {
    const { body, params } = request;

    if(params && Object.keys(params).length > 0){
        Promise.reject(response.status(500).json({"error": "method is not allowed", "status": 500}));
    }
    try {
        if(body && Array.isArray(body) &&  body.length > 0) {
            const requestLabel = await saveRequestI(body);
            response.status(200).json(requestLabel);
        } else{
            response.status(500).json({"error": "Invalid data", "status": 500});
        }
    }catch(error){
        response.status(500).json({"error": error, "status": 500});
    }
}

/**
 * send a id and look for this specific request and if find someone return it, if its not
 * return and 404 and if fails return a 500
 * @param request
 * @param response
 */
export const getRequestByIdController = async (request:Request, response:Response) => {
    const { params, headers } = request;
    try {
        if (headers && headers?.authorization && params?.id){
            const requestLabel = await getRequestByIdI(params.id, headers.authorization);
            if (!requestLabel){
                response.status(404).json({"error": "request not found", "status": 404});
            } else {
                response.status(200).json(requestLabel);
            }
        } else{
            response.status(400).json({"error": "you dont have autorization", "status": 400});
        }
    }catch(error) {
        response.status(500).json({"error": `Something goes wrong ${error}`, status: 500 });
    }
}

