import RequestLabel from "../entities/RequestLabel";
import { v4 as uuid } from 'uuid';
import LabelRequestRepository from "../repositories/labelRequest.repository";
import { fork } from "child_process";
import path from "path";
import { ShippingInformationType } from "../../controllers/types/shippingInformation";


const saveRequest = (labelRequestRepository:LabelRequestRepository) => async (shippingInfo:ShippingInformationType[]) => {
    const id: string = uuid();
    const requestLabel: RequestLabel = {
        status: "pending",
        carrierName: "servientrega",
        requestId: id,
        urlZip: "",
    };
    try {
        const resquestLabelPost = await labelRequestRepository.save(requestLabel);
        const childProcess = fork(path.join(__dirname, 'zipPdfGenerator.interactor.ts'));
        childProcess.send({shippingInfo, id});
        const response = await labelRequestRepository.updateStatus(id, "procesing");
        return  resquestLabelPost;
    } catch(error){
        throw new Error(`save request interactor fails ${error}`)
    }
}

export default saveRequest;