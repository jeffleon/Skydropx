import LabelRequestRepository from "../repositories/labelRequest.repository"



const getRequestById = (labelRequestRepository:LabelRequestRepository) => async (id:string) => {
    const request = await labelRequestRepository.getById(id);
    return request;
}

export default getRequestById;