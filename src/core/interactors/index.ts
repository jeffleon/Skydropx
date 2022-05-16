import RequestLabelSequelize from "../../dataSources/ORM/requestLabelSequelize.datasource";
import ZipPdf from "../../dataSources/PDF&ZIP/pdf&Zip.datasource";
import saveRequest from "./saveRequest.interactor";
import zipGenerator from "./zipPdfGenerator.interactor";


const labelRequestRepository = new RequestLabelSequelize();
const zipPdf = new ZipPdf();

export default saveRequest(labelRequestRepository);
