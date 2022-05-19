import { ShippingDetailsObject } from "../controllers/types/shippingInformation";
import ZipPdf from "../dataSources/pdf&zip/pdf&Zip.datasource";
import { shippingObject, shippingObject1, shippingObject2, shippingWithoutAdressFrom, shippingWithoutAdressTo, shippingWithoutAdressToParcel } from "./test objects/shipingobject"


describe('create PDF function', ()=>{
    it('should return a request object', async () => {
        const zipdf = new ZipPdf();
        const response = await zipdf.createPdf(shippingObject);
        expect(response).toBeInstanceOf(Buffer);
    })
});


describe('create PDF function', ()=>{
    it('Check normal data', async () => {
        const zipdf = new ZipPdf();
        const response = await zipdf.createPdf(shippingObject);
        expect(response).toBeInstanceOf(Buffer);
    })
});

describe('create PDF function', ()=>{
    it('Check object with empty strings', async () => {
        const zipdf = new ZipPdf();
        const response2 = await zipdf.createPdf(shippingObject1);
        expect(response2).toBeInstanceOf(Buffer);
        expect(response2).not.toBeNull();
    });
});

describe('create PDF function', ()=>{
    it('Check object without elements', async () => {
        const zipdf = new ZipPdf();
        const response2 = await zipdf.createPdf(shippingObject2 as ShippingDetailsObject);
        expect(response2).toBeInstanceOf(Buffer);
    });
});

describe('create PDF function', ()=>{
    it('Check object null', async () => {
        const zipdf = new ZipPdf();
        const response2 = await zipdf.createPdf(null as ShippingDetailsObject);
        expect(response2).toBeInstanceOf(Buffer);
    });
});

describe('create PDF function', ()=>{
    it('Check object undefined', async () => {
        const zipdf = new ZipPdf();
        const response2 = await zipdf.createPdf(undefined as ShippingDetailsObject);
        expect(response2).toBeInstanceOf(Buffer);
    });
});

describe('create PDF function', ()=>{
    it('function without adress_from', async () => {
        const zipdf = new ZipPdf();
        const response2 = await zipdf.createPdf(shippingWithoutAdressFrom as ShippingDetailsObject);
        expect(response2).toBeInstanceOf(Buffer);
    });
});

describe('create PDF function', ()=>{
    it('function without adress_to', async () => {
        const zipdf = new ZipPdf();
        const response2 = await zipdf.createPdf(shippingWithoutAdressTo as ShippingDetailsObject);
        expect(response2).toBeInstanceOf(Buffer);
    });
});

describe('create PDF function', ()=>{
    it('function without parcel', async () => {
        const zipdf = new ZipPdf();
        const response2 = await zipdf.createPdf(shippingWithoutAdressToParcel as ShippingDetailsObject);
        expect(response2).toBeInstanceOf(Buffer);
    });
});

describe('create PDF function', ()=>{
    it('function without adress_to and parcel', async () => {
        const zipdf = new ZipPdf();
        const response2 = await zipdf.createPdf(shippingWithoutAdressToParcel as ShippingDetailsObject);
        expect(response2).toBeInstanceOf(Buffer);
    });
});



