import Bucket from "../../dataSources/aws/bucket.datasource";
import RequestLabelSequelize from "../../dataSources/orm/requestLabelSequelize.datasource";
import saveRequest from "./saveRequest.interactor";


const labelRequestRepository = new RequestLabelSequelize();

export default saveRequest(labelRequestRepository);
