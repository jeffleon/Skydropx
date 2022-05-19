import ZipPdf from "../dataSources/pdf&zip/pdf&Zip.datasource";

describe('create PDF function', ()=>{
    
    it('should return a zip buffer', async () => {
        const zipdf = new ZipPdf();
        const asciiBuf = [Buffer.alloc(5, 'a', 'ascii')];
        const response = await zipdf.createZip("23dgre23-gokj675", asciiBuf);
        expect(response).toBeInstanceOf(Buffer);
    })
});

describe('create PDF function', ()=>{
    it('should return a zip buffer', async () => {
        const zipdf = new ZipPdf();
        const asciiBuf = [Buffer.from("")];
        const response = await zipdf.createZip("23dgre23-gokj675", asciiBuf);
        expect(response).toBeInstanceOf(Buffer);
    })
});

describe('create PDF function', ()=>{
    it('should return a zip buffer', async () => {
        const zipdf = new ZipPdf();
        const asciiBuf = [Buffer.alloc(10, '', 'ascii')];
        const response = await zipdf.createZip("23dgre23-gokj675", asciiBuf);
        expect(response).toBeInstanceOf(Buffer);
    })
});

describe('create PDF function', ()=>{
    it('should return a zip buffer 2', async () => {
        const zipdf = new ZipPdf();
        const asciiBuf = [Buffer.from("buffer pruebe")];
        const response = await zipdf.createZip("23dgre23-gokj675", asciiBuf);
        expect(response).toBeInstanceOf(Buffer);
    })
});

describe('create PDF function', ()=>{
    it('create a empty zip', async () => {
        const zipdf = new ZipPdf(); 
        const response = await zipdf.createZip("23dgre23-gokj675", undefined as Buffer[]);
        expect(response).toBeInstanceOf(Buffer);
    })
});



describe('create PDF function', ()=>{
    it('zip file with null', async () => {
        const zipdf = new ZipPdf();
        try {
            const response = await zipdf.createZip("23dgre23-gokj675", null as Buffer[]);
        }catch(e){
            expect(e).toHaveProperty('message', 'Something went wrong. TypeError: Cannot read property \'entries\' of null');
        }
    })
});


