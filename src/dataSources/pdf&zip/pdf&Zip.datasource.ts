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

    public async createZip(requestId: string): Promise<any> {
        try {
            const zip = new AdmZip();
            zip.addLocalFolder("./pdfs");
            var willSendthis = zip.toBuffer();
            console.info(`create ${requestId}.zip`);
            return willSendthis;
        } catch(e) {
            throw new Error(`Something went wrong. ${e}`);
        }
    }

    private createPdfDirectory(){
        exec("rm -rf pdfs; mkdir pdfs");
    }
    
    public createPdf(name: string, destinationLabel:ShippingDetailsObject, id:string):void{
        this.createPdfDirectory();
        pdf.create(content(destinationLabel)).toFile(`./pdfs/${name}_${id}.pdf`, function(err, res) {
            if (err){
                throw new Error(`Something went wrong. ${err}`);
            } else {
                console.info(`generate PDF ${name}_${id}.pdf`);
                return res;
            }
        });
    }
    
}

export default ZipPdf;