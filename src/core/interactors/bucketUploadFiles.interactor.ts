import Bucket from "../../dataSources/aws/bucket.datasource";

process.on("message", ({zipBuffer,id})=> {
    const bucket = new Bucket();
    const buffer = Buffer.from(zipBuffer.data);
    var params = {
        Bucket: process.env.S3_Bucket,
        Key: `${id}.zip`,
        Body: buffer
    };
    const result = bucket.uploadFile(params);
    //process.exit();
});