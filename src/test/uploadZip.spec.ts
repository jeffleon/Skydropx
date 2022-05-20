import {zipGenerator, pdfGenerator} from "../core/interactors/zipPdf/create/zipPdfGenerator.interactor";
import { shippingType, shippingType1 } from "./test objects/shippinType";
import { ShippingInformationType } from "../types/shippingInformation";


describe('create PDF function', ()=>{
    it('should return a zip buffer', async () => {
        const response = await zipGenerator(shippingType, 'ds1232-34-12231');
        expect(response).toBeInstanceOf(Buffer);
    })
});


describe('create PDF function', ()=>{
    it('should return a zip buffer', async () => {
        const response = await zipGenerator(shippingType1 as ShippingInformationType[], 'ds1232-34-12231');
        expect(response).toBeInstanceOf(Buffer);
    })
});