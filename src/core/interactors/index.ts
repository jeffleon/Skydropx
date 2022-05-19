import RequestLabelSequelize from "../../dataSources/orm/requestLabelSequelize.datasource";
import saveRequest from "./requestLabel/create/saveRequest.interactor";
import getRequestById from "./requestLabel/get/getRequestById.interactor";


const labelRequestRepository = new RequestLabelSequelize();

export const saveRequestI = saveRequest(labelRequestRepository);
export const getRequestByIdI = getRequestById(labelRequestRepository);
