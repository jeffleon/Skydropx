import JwtRepository from "../../../repositories/jwt.repository";
import LabelRequestRepository from "../../../repositories/labelRequest.repository"


/**
 * This interactor inyect the dependencies of a labelRequestRepository 
 * then call the method that find the  request with this specific id and return it
 * return the request 
 * @param labelRequestRepository 
 * @returns
 * @param id
 * @returns Promise<RequestLabel> | Error
 */
const getRequestById = (labelRequestRepository:LabelRequestRepository, jwt:JwtRepository) => async (id:string, token:string) => {
    try {  
        const request = await labelRequestRepository.getById(id);
        if (request && request?.carrierName) {
            const decode = jwt.verifyToken(token);
            if (decode && decode?.requestId && decode.requestId === id) {
                return request;
            }
            throw new Error(`your token dont match with the id request`)
        }
        return request;
    } catch(err){
        throw new Error(`get request by id interactor fails ${err}`)
    }
}

export default getRequestById;