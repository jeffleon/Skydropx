import RequestLabel from "../entities/RequestLabel";
import { v4 as uuid } from 'uuid';
import LabelRequestRepository from "../repositories/labelRequest.repository";
import { fork } from "child_process";
import path from "path";
import { ShippingInformationType } from "../../controllers/types/shippingInformation";


const saveRequest =(labelRequestRepository:LabelRequestRepository) => async (carrier:ShippingInformationType[]) => {
    const id: string = uuid();
    const requestLabel: RequestLabel = {
        status: "pending",
        carrierName: "servientrega",
        requestId: id,
        urlZip: "",
    };
    console.log("carrier",carrier);
    const resquestLabelPost = await labelRequestRepository.save(requestLabel);
    const childProcess = fork(path.join(__dirname, 'zipPdfGenerator.interactor.ts'));
    childProcess.send({carrier});
    return  resquestLabelPost;
}

export default saveRequest;