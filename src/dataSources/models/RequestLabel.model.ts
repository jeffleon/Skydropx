export default (sequelize: any, type:any) => {
    return sequelize.define('request_labels',{
        status: {
            type: type.STRING,
            allowNull: false,                               
        },
        carrierName: {
            type: type.STRING,
            allowNull: false
        },
        requestId: {
            type: type.STRING,
            allowNull: false
        },
        urlZip: {
            type: type.STRING,
            allowNull: false
        }
    })
}