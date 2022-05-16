import { ShippingInformationType } from "../../controllers/types/shippingInformation";
import ZipPdf from "../../dataSources/PDF&ZIP/pdf&Zip.datasource";

process.on("message", ({carrier})=> {
    zipGenerator(carrier);
    process.exit();
});

const zipGenerator = (shippingInformation:ShippingInformationType[]) => {
    const zipPdf = new ZipPdf();
    for(const [index, label] of shippingInformation.entries()) {
        zipPdf.createPdf(label.carrier + index, label.shipment);
    }
}

export default zipGenerator;