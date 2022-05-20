import RequestLabel from "../../../entities/RequestLabel";
import { v4 as uuid } from 'uuid';
import LabelRequestRepository from "../../../repositories/labelRequest.repository";
import { fork } from "child_process";
import path from "path";
import { ShippingInformationType } from "../../../../types/shippingInformation";
import JwtRepository from "../../../repositories/jwt.repository";

/**
 * This interactor inyect the dependencies of a labelRequestRepository then call the method 
 * to save the request label and begin a subprocess 
 * to create the zip file also update the state of requests
 * return the request created
 * @param labelRequestRepository
 * @param shippingInfo
 * @return 
 * @returns Promise<RequestLabel> | Error
 */
const saveRequest = (labelRequestRepository:LabelRequestRepository, jwt:JwtRepository) => async (shippingInfo:ShippingInformationType[]) => {
    const id: string = uuid();
    let carrierName: string = "";
    
    if (shippingInfo && Array.isArray(shippingInfo) && shippingInfo.length > 0 && shippingInfo[0].hasOwnProperty('carrier')){
        carrierName = shippingInfo[0].carrier;
    } else {
        throw new Error(`specify the carrier`);
    }

    const token = jwt.createToken(carrierName, id);
    const requestLabel: RequestLabel = {
        status: "pending",
        carrierName,
        requestId: id,
        urlZip: "",
        token
    };
    try {
        const resquestLabelPost = await labelRequestRepository.save(requestLabel);
        const childProcess = fork(path.join(__dirname, '..', '..', 'zipPdf', 'create', 'zipPdfGenerator.interactor.ts'));
        childProcess.send({shippingInfo, id});
        const response = await labelRequestRepository.updateStatus(id, "procesing");
        return  resquestLabelPost;
    } catch(error){
        throw new Error(`save request interactor fails ${error}`)
    }
}

export default saveRequest;