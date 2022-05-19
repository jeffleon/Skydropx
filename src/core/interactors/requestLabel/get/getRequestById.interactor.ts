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
const getRequestById = (labelRequestRepository:LabelRequestRepository) => async (id:string) => {
    try {
        const request = await labelRequestRepository.getById(id);
        return request;
    } catch(err){
        throw new Error(`get request by id interactor fails ${err}`)
    }
}

export default getRequestById;