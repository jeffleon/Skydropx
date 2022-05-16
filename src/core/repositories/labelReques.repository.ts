import Carrier from "../entities/Carrier";


export default interface LabelRequestRepository {
    save(carrier: string): Promise<Carrier>;
    getById(requestId:string):Promise<Carrier>;
    updateStatus(requestId:string, status: string):Promise<Carrier>;
    updateURLZip(requestId:string, url: string):Promise<Carrier>;
    downloadZip(requestId:string):Promise<any>;
}