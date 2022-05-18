export default interface BucketRepository {
    createBucket():void;
    uploadFile(params:any):Promise<string>;
}