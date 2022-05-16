import RequestLabelSql from "../../dataSources/requestLabelSql.datasource";
import saveRequest from "./saveRequest.interactor";

const labelRequestRepository = new RequestLabelSql();

export default saveRequest(labelRequestRepository);