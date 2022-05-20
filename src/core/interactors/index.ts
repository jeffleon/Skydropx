import Bucket from "../../dataSources/aws/bucket.datasource";
import RequestLabelSequelize from "../../dataSources/orm/requestLabelSequelize.datasource";
import downloadFile from "./bucket/download/downloadFile.interactor";
import saveRequest from "./requestLabel/create/saveRequest.interactor";
import getRequestById from "./requestLabel/get/getRequestById.interactor";


const labelRequestRepository = new RequestLabelSequelize();
const bucket = new Bucket();

export const saveRequestI = saveRequest(labelRequestRepository);
export const getRequestByIdI = getRequestById(labelRequestRepository);
export const downloadFileI = downloadFile(bucket, labelRequestRepository);