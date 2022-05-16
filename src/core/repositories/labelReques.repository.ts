import Carrier from "../entities/Carrier";


export default interface LabelRequestRepository {
    saveRequest(carrier: string): Promise<Carrier>;
    getRequestById(requestId:string):Promise<Carrier>;
    updateRequestStatus(requestId:string, status: string):Promise<Carrier>;
    updateURLZip(requestId:string, url: string):Promise<Carrier>;
    downloadZip(requestId:string):Promise<any>;
}