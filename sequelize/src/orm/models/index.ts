import { Sequelize } from "sequelize";
import config from '../config/config';

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: 'mysql',
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 30000
        }
    }
)

export { sequelize };