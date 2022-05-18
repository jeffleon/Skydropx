import RequestLabelSequelize from "../../dataSources/orm/requestLabelSequelize.datasource";
import saveRequest from "./saveRequest.interactor";
import getRequestById from "./getRequestById.interactor";


const labelRequestRepository = new RequestLabelSequelize();

export const saveRequestI = saveRequest(labelRequestRepository);
export const getRequestByIdI = getRequestById(labelRequestRepository);
