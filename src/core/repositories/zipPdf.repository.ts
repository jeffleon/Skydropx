import { ShippingDetailsObject } from "../../controllers/types/shippingInformation";

export default interface ZipPdfRepository {
    readZip(path:string):Promise<void>;
    createZip(requestId:string):void;
    createPdf(name: string, content:ShippingDetailsObject, id:string):void;
}