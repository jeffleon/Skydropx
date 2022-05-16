import LabelRequestRepository from "../core/repositories/labelRequest.repository";
import RequestLabelModel from "./database/requestLabel.model";
import RequestLabel from "../core/entities/RequestLabel";
import sequelize from "./database/config";



class RequestLabelSql implements LabelRequestRepository {
    public async save(request: RequestLabel): Promise<RequestLabel> {
        const response = await RequestLabelModel.create(request);
        return response;
    }

    constructor(){
        this.getConection();
    }
    
    private async getConection(){
        sequelize.sync({force:false}).then(()=>{
            console.log("Connection Success")
          }).catch(error=>{
            console.log(`Connection Fail ${error}`)
          })
    }
}

export default RequestLabelSql;