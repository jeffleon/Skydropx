import { Sequelize } from 'sequelize';
import 'dotenv/config';

/**
 * Sequilize object connection
 */
const sequelize = new Sequelize(
    process.env.databaseAWS,
    process.env.userDBAws,
    process.env.passwordDBAws,{
        host: process.env.hostDBAws,
        dialect: "mysql"
    }
);

export default sequelize;