import { ShippingInformationType } from "../../controllers/types/shippingInformation";
import ZipPdf from "../../dataSources/PDF&ZIP/pdf&Zip.datasource";
import fs from "fs";

process.on("message", ({carrier, id})=> {
    zipGenerator(carrier, id);
    process.exit();
});

const zipGenerator = async (shippingInformation:ShippingInformationType[], id: string) => {
    const zipPdf = new ZipPdf();
    await pdfGenerator(zipPdf, shippingInformation, id);
    await zipPdf.createZip(id);
}


const pdfGenerator = (zipPdf:any, shippingInformation:ShippingInformationType[], id:string)=>{
    let res = []
    for(const [index, label] of shippingInformation.entries()) {
       res.push(zipPdf.createPdf(label.carrier + index, label.shipment, id));
    }
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        setTimeout(()=>{
            resolve("done");
        ;} , 5000
        );
    });
}

export default zipGenerator;