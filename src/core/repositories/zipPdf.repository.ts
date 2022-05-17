import { ShippingDetailsObject } from "../../controllers/types/shippingInformation";
import RequestLabel from "../entities/RequestLabel";

export default interface ZipPdfRepository {
    createZip(requestId:string):void;
    createPdf(name: string, content:ShippingDetailsObject, id:string):void;
}