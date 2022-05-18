import LabelRequestRepository from "../../core/repositories/labelRequest.repository";
import RequestLabelModel from "./requestLabel.model";
import RequestLabel from "../../core/entities/RequestLabel";
import sequelize from "./config";



class requestLabelSequelize implements LabelRequestRepository {
    public async save(request: RequestLabel): Promise<RequestLabel> {
        const response = await RequestLabelModel.create(request);
        return response;
    }

    public async getById(requestId: string): Promise<RequestLabel> {
        const requestLabel = await RequestLabelModel.findOne({ where: { requestId } });
        return requestLabel;
    }

    public async updateStatus(requestId: string, status: string): Promise<number> {
        const [updatedRows] = await RequestLabelModel.update({ status }, {
            where: {
                requestId
            }
        });
        return updatedRows;
    }

    public async updateUrl(requestId: string, url: string): Promise<number> {
        const [updatedRows] = await RequestLabelModel.update({ urlZip: url, status: "completed" }, {
            where: {
                requestId
            }
        });
        return updatedRows;
    }

    public async getConection(){
        sequelize.sync({force:false}).then(()=>{
            console.log("Connection Success")
          }).catch(error=>{
            console.log(`Connection Fail ${error}`)
          })
    }
}

export default requestLabelSequelize;