import LabelRequestRepository from "../repositories/labelRequest.repository"



const getRequestById = (labelRequestRepository:LabelRequestRepository) => async (id:string) => { 
    let request = await labelRequestRepository.getById(id);
    return request;
}

export default getRequestById;