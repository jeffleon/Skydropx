import RequestLabel from "../entities/RequestLabel";
import { v4 as uuid } from 'uuid';
import LabelRequestRepository from "../repositories/labelRequest.repository";


const saveRequest = (labelRequestRepository:LabelRequestRepository) => async (carrier:string) => {
    const id: string = uuid();
    const requestLabel: RequestLabel = {
        status: "pending",
        carrierName: carrier,
        requestId: id,
        urlZip: "",
    } 
    const resquestLabelPost = await labelRequestRepository.save(requestLabel);
    return  resquestLabelPost;
}

export default saveRequest;