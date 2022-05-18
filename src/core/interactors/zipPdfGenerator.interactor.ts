import { fork } from "child_process";
import path from "path";
import { ShippingInformationType } from "../../controllers/types/shippingInformation";
import ZipPdf from "../../dataSources/pdf&zip/pdf&Zip.datasource";

process.on("message", async ({shippingInfo, id})=> {
    const zipBuffer = await zipGenerator(shippingInfo, id);
    const childProcess = fork(path.join(__dirname, 'bucketUploadFiles.interactor.ts'));
    childProcess.send({zipBuffer, id}); 
    //process.exit();
});

const zipGenerator = async (shippingInformation:ShippingInformationType[], id: string) => {
    const zipPdf = new ZipPdf();
    await pdfGenerator(zipPdf, shippingInformation, id)
    return zipPdf.createZip(id);
}

const pdfGenerator = (zipPdf:any, shippingInformation:ShippingInformationType[], id:string)=>{
    for(const [index, label] of shippingInformation.entries()) {
       zipPdf.createPdf(label.carrier + index, label.shipment, id);
    }
    return new Promise((resolve, reject)=>{ 
        setTimeout(()=>{
            resolve("done");
        ;} , 1000
        );
    });
}

export default zipGenerator;