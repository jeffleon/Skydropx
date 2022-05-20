import s3 from "./config";
import 'dotenv/config';


class Bucket {
    private params = {
        Bucket: process.env.S3_Bucket,
        CreateBucketConfiguration: {
            LocationConstraint: "eu-west-1"
        }
    };
    private policy = {
        Version: "2012-10-17",
        Statement: [
            {
                Sid: "AddPerm",
                Effect: "Allow",
                Principal: "*",
                Action: [
                    "s3:GetObject"
                ],
                Resource: [
                    `arn:aws:s3:::${process.env.S3_Bucket}/*`
                ]
            }
        ]
    }

    /**
     * Function that upload the zip file in a aws Bucket 
     * return the url to download the pdf
     * @param params 
     * @returns Promise<string>
     */
    public async uploadFile(params:any):Promise<string>{
          s3.upload(params, (err:Error) => {
            if (err) throw new Error(`Something when wrong upload file ${err}`);
            else console.info("File successfully uploaded.");
          })
          const url = `https://${process.env.S3_Bucket}.s3.eu-west-1.amazonaws.com/${params.Key}`;
          return url;
    }
    /**
     * get file for the param key 
     * @param params
     */
    public async downloadFile(params:any) {
        try {
            var fileStream = s3.getObject(params).createReadStream();
            return fileStream;
        } catch(error) {
            throw new Error(`Something goes wrong ${error}`)
        }
        
    }

    /**
     * Function that inicialize the bucket with policy to become the bucket in a public bucket
     */
    public async createBucket(){
        let bucketPolicyParams = {Bucket: process.env.S3_Bucket, Policy: JSON.stringify(this.policy)};

        s3.createBucket(this.params, function(err, data) {
            if (err && err.statusCode == 409){
                console.info("Bucket has been created already");
            }
            else {
                s3.putBucketPolicy(bucketPolicyParams, function(err, data) {
                    if (err) {
                        throw new Error(`Something when wrong add policy ${err}`);
                    } else {
                        console.info(`Bucket ${process.env.S3_Bucket} Created Successfull with policy`);
                    }
                });
            }
        });
    }
}

export default Bucket;