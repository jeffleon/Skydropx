import { Sequelize } from 'sequelize';
import 'dotenv/config';

/**
 * Sequilize object connection
 */
const sequelize = new Sequelize(
    process.env.database,
    process.env.user,
    process.env.password,{
        host: process.env.host,
        dialect: "mysql"
    }
);

export default sequelize;