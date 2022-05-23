import LabelRequestRepository from "../../core/repositories/labelRequest.repository";
import RequestLabelModel from "./requestLabel.model";
import RequestLabel from "../../core/entities/RequestLabel";
import sequelize from "./config";



class requestLabelSequelize implements LabelRequestRepository {

    /**
     * This funtion interact with ORM for save a request label
     * return the object created
     * @param request
     * @returns Promise<RequestLabel>
     */
    public async save(request: RequestLabel): Promise<RequestLabel> {
        try {
            const response = await RequestLabelModel.create(request);
            return response;
        }catch(error){
            throw new Error(`Save resquest label error: ${error}`);
        }
    }

    /**
     * This funtion interact with ORM find a request with a specific id
     * return the request found
     * @param requestId
     * @returns Promise<RequestLabel>
     */
    public async getById(requestId: string): Promise<RequestLabel> {
        try {
            const requestLabel = await RequestLabelModel.findOne({ where: { requestId } });
            return requestLabel;
        } catch(error){
            throw new Error(`Get by id resquest label error: ${error}`);
        }
    }

    /**
     * This method interact with ORM to update the status of request label
     * return the number of rows changed
     * @param requestId
     * @param status
     * @returns Promise<number>
     */
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

    /**
     * This function update the url that contains the zip file
     * return the number of rows changed
     * @param requestId
     * @param url
     * @returns Promise<number>
     */
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

    /**
     * This method sync the sequilize object conection with a model
     */
    public async getConection(){
        sequelize.sync({force:false}).then(()=>{
            console.log("Connection Success")
          }).catch(error=>{
              throw new Error(`Connection Fail ${error}`);
          })
    }
}

export default requestLabelSequelize;