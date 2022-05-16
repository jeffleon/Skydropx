import RequestLabel from "../../core/entities/RequestLabel";
import ZipPdfRepository from "../../core/repositories/zipPdf.repository";
import pdf from "html-pdf";
import { content } from "./pdfTemplate";
import { ShippingDetailsObject } from "../../controllers/types/shippingInformation";
import {exec} from "child_process";


class ZipPdf implements ZipPdfRepository {
    
    public createZip(requestId: string): Promise<RequestLabel> {
        throw new Error("Method not implemented.");
    }

    private createPdfDirectory(){
        exec("mkdir pdfs");
    }
    
    public createPdf(name: string, destinationLabel:ShippingDetailsObject): void {
        this.createPdfDirectory()
        pdf.create(content(destinationLabel)).toFile(`./pdfs/${name}.pdf`, function(err, res) {
            if (err){
                console.log(err);
            } else {
                console.log(res);
            }
        });
    }
    
}

export default ZipPdf;