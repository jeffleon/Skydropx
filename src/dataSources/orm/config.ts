import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    "sky_dropx",
    "root",
    "secret",{
        host: "localhost",
        dialect: "mysql"
    }
);

export default sequelize;