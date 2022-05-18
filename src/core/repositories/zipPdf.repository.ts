import { AnyLengthString } from "aws-sdk/clients/comprehend";
import { ShippingDetailsObject } from "../../controllers/types/shippingInformation";

export default interface ZipPdfRepository {
    readZip(path:string):any;
    createZip(requestId: string, bufferArray:Buffer[]):Promise<Buffer>;
    createPdf(content:ShippingDetailsObject):Promise<Buffer>;
}