import LabelRequestRepository from "../core/repositories/labelReques.repository";
import { Sequelize } from "sequelize";
import RequestLabelModel from "./models/RequestLabel.model";
import RequestLabel from "../core/entities/RequestLabel";



class RequestLabelSql implements LabelRequestRepository {
    public async save(request: RequestLabel): Promise<RequestLabel> {
        const requestLabel = await this.getConnection();
        const response = await requestLabel.create(request);
        return response;
    }

    private async getConnection(){
        const sequelize = new Sequelize('database', 'username', 'password', {
            host: 'localhost',
            dialect: 'mysql'
        });

        const requestLabels = RequestLabelModel(sequelize, Sequelize);
        sequelize.sync({force: false}).then(()=>{
            console.log('Tablas Syncronizadas');
        });

        return requestLabels;
    } 
    
}

export default RequestLabelSql;