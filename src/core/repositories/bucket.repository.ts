import { BucketParams } from "../../types/bucketparams.types";

/**
 * signatures of Bucket Repository
 */
export default interface BucketRepository {
    createBucket():void;
    uploadFile(params:BucketParams):Promise<string>;
    downloadFile(params:BucketParams):any;
}