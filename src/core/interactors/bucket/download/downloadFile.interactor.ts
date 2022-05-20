import LabelRequestRepository from "../../../repositories/labelRequest.repository";
import BucketRepository from "../../../repositories/bucket.repository"
import RequestLabel from "../../../entities/RequestLabel";

/**
 * Interactor call the method download zip file 
 * @param bucket 
 * @param labelRequest 
 * @returns 
 */

const downloadFile = (bucket:BucketRepository,labelRequest:LabelRequestRepository) =>async (id:string)=>{
    const request:RequestLabel = await labelRequest.getById(id);
    if (request){
        if (request?.status && request.status === "completed") {
            var s3Params = {
                Bucket: process.env.S3_Bucket,
                Key: `${id}.zip`
            };
            const res = await bucket.downloadFile(s3Params);
            return res;
        } 
        return null;
    } 
    return request
} 

export default downloadFile;