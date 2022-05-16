import { Response, Request } from 'express';
import saveRequest from '../core/interactors';

const createrequestLabelController = async (request:Request, response:Response) => {
    const { body } = request;
    const requestLabel = await  saveRequest("servientrega");
    response.status(200).json(requestLabel);
}

export default createrequestLabelController;