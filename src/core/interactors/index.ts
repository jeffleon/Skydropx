import Bucket from "../../dataSources/aws/bucket.datasource";
import RequestLabelSequelize from "../../dataSources/orm/requestLabelSequelize.datasource";
import saveRequest from "./saveRequest.interactor";


const labelRequestRepository = new RequestLabelSequelize();
const bucketRepository = new Bucket();

export default saveRequest(labelRequestRepository);
