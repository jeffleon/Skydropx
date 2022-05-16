import { Response, Request } from 'express';
import saveRequest from '../core/interactors';
import { ShippingInformationType } from './types/shippingInformation'; "./types/shippingInformation"

const createrequestLabelController = async (request:Request, response:Response) => {
    const { body } = request;
    
    const requestLabel = await saveRequest(body);
    response.status(200).json(requestLabel);
}

export default createrequestLabelController;