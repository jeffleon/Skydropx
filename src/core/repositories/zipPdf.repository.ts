import { ShippingDetailsObject } from "../../controllers/types/shippingInformation";

/**
 * signatures of Zip PDF Repository
 */
export default interface ZipPdfRepository {
    createZip(requestId: string, bufferArray:Buffer[]):Promise<Buffer>;
    createPdf(content:ShippingDetailsObject):Promise<Buffer>;
}