import RequestLabel from "../../core/entities/RequestLabel";
import ZipPdfRepository from "../../core/repositories/zipPdf.repository";
import pdf from "html-pdf";
import { content } from "./pdfTemplate";
import { ShippingDetailsObject } from "../../controllers/types/shippingInformation";
import {exec} from "child_process";
import AdmZip from "adm-zip";


class ZipPdf implements ZipPdfRepository {
    
    public async readZip(filepath:string) {
        try {
          const zip = new AdmZip(filepath);
      
          for (const zipEntry of zip.getEntries()) {
            console.log(zipEntry.toString());
          }
        } catch (e) {
          console.log(`Something went wrong. ${e}`);
        }
    }

    public async createZip(requestId: string, bufferArray:Buffer[]): Promise<Buffer> {
        try {
            const zip = new AdmZip();
            for (let [index, file] of bufferArray.entries()){
                zip.addFile(`${requestId +  "_" + index}.pdf`, file);
            }
            var willSendthis = zip.toBuffer();
            console.log("file:",willSendthis);
            console.info(`create ${requestId}.zip`);
            return willSendthis;
        } catch(e) {
            throw new Error(`Something went wrong. ${e}`);
        }
    }

    public createPdf(destinationLabel:ShippingDetailsObject):Promise<Buffer>{
        return new Promise(((resolve, reject) => {
        pdf.create(content(destinationLabel)).toBuffer((err, buffer) => {
            if (err !== null) {reject(err);}
            else {resolve(buffer);}
        });
    }))};
        
}

export default ZipPdf;