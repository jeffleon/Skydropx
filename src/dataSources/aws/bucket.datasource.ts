import s3 from "./config";
import 'dotenv/config';


class Bucket {
    private params = {
        Bucket: process.env.S3_Bucket,
        CreateBucketConfiguration: {
            LocationConstraint: "eu-west-1"
        }
    };
    constructor(){
        this.createBucket();
    }
    
    private createBucket(){
        s3.waitFor('bucketNotExists', { "Bucket": this.params.Bucket} , function(err, data) {
            if (err){
                console.log(`Bucket ${process.env.S3_Bucket} already exists`);
            } else {
                s3.createBucket(this.params, function(err, data) {
                    if (err) console.log(err, err.stack);
                    else console.log(`Bucket ${process.env.S3_Bucket} Created Successfull`, data.Location);
                });
            }            
        });
        
    }
}

export default Bucket;