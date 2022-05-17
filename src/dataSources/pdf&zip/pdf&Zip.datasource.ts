import RequestLabel from "../../core/entities/RequestLabel";
import ZipPdfRepository from "../../core/repositories/zipPdf.repository";
import pdf from "html-pdf";
import { content } from "./pdfTemplate";
import { ShippingDetailsObject } from "../../controllers/types/shippingInformation";
import {exec} from "child_process";
import JSZip from 'jszip';
import fs from 'fs';
import { saveAs } from "file-saver";
import AdmZip from "adm-zip";


class ZipPdf implements ZipPdfRepository {
    
    public async createZip(requestId: string): Promise<any> {
        const zip = new AdmZip();
        const outputFile = `./pdfs/${requestId}.zip`;
        zip.addLocalFolder("./pdfs");
        return zip.writeZip(outputFile);
    }

    private createPdfDirectory(){
        exec("rm -rf pdfs; mkdir pdfs");
    }
    
    public createPdf(name: string, destinationLabel:ShippingDetailsObject, id:string):void{
        this.createPdfDirectory()
        pdf.create(content(destinationLabel)).toFile(`./pdfs/${name}_${id}.pdf`, function(err, res) {
            if (err){
                throw new Error;
            } else {
                return res;
            }
        });
    }
    
}

export default ZipPdf;