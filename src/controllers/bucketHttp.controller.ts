import { Response, Request } from 'express';


const createBucketcontroller = async (request:Request, response:Response) => {
    const { body } = request;
    
    response.status(200).json("");
}

export default createBucketcontroller;