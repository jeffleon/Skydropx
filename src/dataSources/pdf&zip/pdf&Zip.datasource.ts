import ZipPdfRepository from "../../core/repositories/zipPdf.repository";
import pdf from "html-pdf";
import { content } from "./pdfTemplate";
import { ShippingDetailsObject } from "../../controllers/types/shippingInformation";
import AdmZip from "adm-zip";


class ZipPdf implements ZipPdfRepository {
    /**
     * This function create the Zip Buffer
     * return the buffer
     * @param requestId 
     * @param bufferArray 
     * @returns Promise<Buffer>
     */
    public async createZip(requestId: string, bufferArray:Buffer[]): Promise<Buffer> {
        try {
            const zip = new AdmZip();
            if (bufferArray) {
                console.log("entre al zip", bufferArray);
                for (let [index, file] of bufferArray.entries()) {
                    zip.addFile(`${requestId +  "_" + index}.pdf`, file);
                }
            }
            var willSendthis = zip.toBuffer();
            console.log("file:",willSendthis);
            console.info(`create ${requestId}.zip`);
            return willSendthis;
        } catch(e) {
            throw new Error(`Something went wrong. ${e}`);
        }
    }

    /**
     * This function create the Buffer Pdf
     * return this Buffer
     * @param destinationLabel 
     * @returns Promise<Buffer>
     */
    public createPdf(destinationLabel:ShippingDetailsObject):Promise<Buffer>{
        return new Promise(((resolve, reject) => {
        pdf.create(content(destinationLabel)).toBuffer((err, buffer) => {
            if (err !== null) {reject(err);}
            else {resolve(buffer);}
        });
    }))};
        
}

export default ZipPdf;