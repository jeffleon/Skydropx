import RequestLabel from "../entities/RequestLabel";

/**
 * signatures of Label Request Repository
 */
export default interface LabelRequestRepository {
    save(request: RequestLabel): Promise<RequestLabel>;
    getById(requestId:string):Promise<RequestLabel>;
    updateStatus(requestId:string, status: string):Promise<number>;
    updateUrl(requestId:string, url: string):Promise<number>;
}