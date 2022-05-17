import aws from "aws-sdk";
import 'dotenv/config';

const s3 = new aws.S3({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey
});

export default s3;