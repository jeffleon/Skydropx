import LabelRequestRepository from "../../core/repositories/labelRequest.repository";
import RequestLabelModel from "./requestLabel.model";
import RequestLabel from "../../core/entities/RequestLabel";
import sequelize from "./config";



class requestLabelSequelize implements LabelRequestRepository {
    public async save(request: RequestLabel): Promise<RequestLabel> {
        try {
            const response = await RequestLabelModel.create(request);
            return response;
        }catch(error){
            throw new Error(`Save resquest label error: ${error}`);
        }
    }

    public async getById(requestId: string): Promise<RequestLabel> {
        try {
            const requestLabel = await RequestLabelModel.findOne({ where: { requestId } });
            return requestLabel;
        } catch(error){
            throw new Error(`Get by id resquest label error: ${error}`);
        }
    }

    public async updateStatus(requestId: string, status: string): Promise<number> {
        try{
            const [updatedRows] = await RequestLabelModel.update({ status }, {
                where: {
                    requestId
                }
            });
            return updatedRows;
        } catch(error){
            throw new Error(`Update status request label error: ${error}`);
        }
    }

    public async updateUrl(requestId: string, url: string): Promise<number> {
        try{
            const [updatedRows] = await RequestLabelModel.update({ urlZip: url, status: "completed" }, {
                where: {
                    requestId
                }
            })
            return updatedRows;
        }catch(error){
            throw new Error(`Update url request label error: ${error}`);
        }  
    }

    public async getConection(){
        sequelize.sync({force:false}).then(()=>{
            console.log("Connection Success")
          }).catch(error=>{
              throw new Error(`Connection Fail ${error}`);
          })
    }
}

export default requestLabelSequelize;