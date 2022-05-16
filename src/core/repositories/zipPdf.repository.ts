import { ShippingDetailsObject } from "../../controllers/types/shippingInformation";
import RequestLabel from "../entities/RequestLabel";

export default interface ZipPdfRepository {
    createZip(requestId:string):Promise<RequestLabel>;
    createPdf(name: string, content:ShippingDetailsObject):void;
}