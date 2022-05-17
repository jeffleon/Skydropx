import s3 from "./config";
import 'dotenv/config';


class Bucket {
    constructor(){
        this.createBucket();
    }
    
    private createBucket(){
        const params = {
            Bucket: process.env.S3_Bucket,
            CreateBucketConfiguration: {
                LocationConstraint: "eu-west-1"
            }
        };
        s3.createBucket(params, function(err, data) {
            if (err) console.log(err, err.stack);
            else console.log('Bucket Created Successfully', data.Location);
        });
    }
}

export default Bucket;