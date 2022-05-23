import { Sequelize } from 'sequelize';
import 'dotenv/config';

/**
 * Sequilize object connection
 */
const sequelize = new Sequelize(
    process.env.database,
    process.env.userAws,
    process.env.passwordAws,{
        host: process.env.hostAws,
        dialect: "mysql"
    }
);

export default sequelize;