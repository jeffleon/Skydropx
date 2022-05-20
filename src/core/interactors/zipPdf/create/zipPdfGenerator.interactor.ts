import Bucket from "../../../../dataSources/aws/bucket.datasource";
import { ShippingInformationType } from "../../../../types/shippingInformation";
import ZipPdf from "../../../../dataSources/pdf&zip/pdf&Zip.datasource";
import requestLabelSequelize from "../../../../dataSources/orm/requestLabelSequelize.datasource";

process.on("message", async ({shippingInfo, id})=> {
    const zipBuffer = await zipGenerator(shippingInfo, id);
    console.log("Create Zip buffer!!");
    uploadZip(zipBuffer, id);
    //process.exit();
});

/**
 * Get an array Buffer and call the method that upload this buffer in S3 aws
 * @param zipBuffer 
 * @param id 
 */
export const uploadZip = async (zipBuffer:any, id:string) => {
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

/**
 * Get the shipping information with this data call the method to create a buffer of Pdfs 
 * and then call the method to create the zip buffer 
 * return the zip buffer
 * @param shippingInformation 
 * @param id 
 * @returns Buffer
 */
export const zipGenerator = async (shippingInformation:ShippingInformationType[], id: string) => {
    const zipPdf = new ZipPdf();
    const bufferArray = await pdfGenerator(zipPdf, shippingInformation, id);
    console.log("Create pdf buffer!!");
    const bufferZip = await zipPdf.createZip(id, bufferArray);
    return bufferZip
}

/**
 * This function call the method to create the buffer whit the Pdfs
 * return the buffer PDfs
 * @param zipPdf 
 * @param shippingInformation 
 * @param id 
 * @returns Buffer
 */
export const pdfGenerator = async(zipPdf:ZipPdf, shippingInformation:ShippingInformationType[], id:string)=>{
    const bufferArray = [];
    for(const label of shippingInformation) {
        bufferArray.push(await zipPdf.createPdf(label.shipment)); 
    }
    return bufferArray;
}

export default zipGenerator;