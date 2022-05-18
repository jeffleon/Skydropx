import { fork } from "child_process";
import path from "path";
import Bucket from "../../dataSources/aws/bucket.datasource";
import { ShippingInformationType } from "../../controllers/types/shippingInformation";
import ZipPdf from "../../dataSources/pdf&zip/pdf&Zip.datasource";
import requestLabelSequelize from "../../dataSources/orm/requestLabelSequelize.datasource";

process.on("message", async ({shippingInfo, id})=> {
    const zipBuffer = await zipGenerator(shippingInfo, id);
    console.log("Create Zip buffer!!");
    uploadZip(zipBuffer, id);
    //process.exit();
});

const uploadZip = async (zipBuffer:any, id:string) => {
    const bucket = new Bucket();
    const requestlabel = new requestLabelSequelize();
    const buffer = Buffer.from(zipBuffer);
    var params = {
        Bucket: process.env.S3_Bucket,
        Key: `${id}.zip`,
        Body: buffer
    };
    const result = await bucket.uploadFile(params);
    requestlabel.updateUrl(id, result);
}

const zipGenerator = async (shippingInformation:ShippingInformationType[], id: string) => {
    const zipPdf = new ZipPdf();
    const bufferArray = await pdfGenerator(zipPdf, shippingInformation, id);
    console.log("Create pdf buffer!!");
    const bufferZip = await zipPdf.createZip(id, bufferArray);
    return bufferZip
}

const pdfGenerator = async(zipPdf:any, shippingInformation:ShippingInformationType[], id:string)=>{
    const bufferArray = [];
    for(const label of shippingInformation) {
        bufferArray.push(await zipPdf.createPdf(label.shipment)); 
    }
    return bufferArray;
}

export default zipGenerator;