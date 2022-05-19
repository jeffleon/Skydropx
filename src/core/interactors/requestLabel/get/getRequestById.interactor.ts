import LabelRequestRepository from "../../../repositories/labelRequest.repository"



const getRequestById = (labelRequestRepository:LabelRequestRepository) => async (id:string) => {
    try {
        const request = await labelRequestRepository.getById(id);
        return request;
    } catch(err){
        throw new Error(`get request by id interactor fails ${err}`)
    }
}

export default getRequestById;