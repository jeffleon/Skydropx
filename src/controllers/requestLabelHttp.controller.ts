import { Response, Request } from 'express';
import { saveRequestI, getRequestByIdI } from '../core/interactors';

export const createrequestLabelController = async (request:Request, response:Response) => {
    const { body } = request;
    const requestLabel = await saveRequestI(body);
    response.status(200).json(requestLabel);
}

export const getRequestByIdController = async (request:Request, response:Response) => {
    const { params } = request;
    const requestLabel = await getRequestByIdI(params.id);
    response.status(200).json(requestLabel);
}

