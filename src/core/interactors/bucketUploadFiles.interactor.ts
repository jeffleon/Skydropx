import Bucket from "../../dataSources/aws/bucket.datasource";

process.on("message", ({zipBuffer,id})=> {
    console.log("inside this interactor");
    const bucket = new Bucket();
    console.log("Buffer", zipBuffer);
    const buffer = Buffer.from(zipBuffer);
    var params = {
        Bucket: process.env.S3_Bucket,
        Key: `${id}.zip`,
        Body: buffer
    };
    const result = bucket.uploadFile(params);
    //process.exit();
});