import 'dotenv/config'; 
import { Sequelize } from 'sequelize';
import userModel from './user.model.js';

const requiredEnvironmentVariables = [
'DB_HOST',
'DB_NAME',
'DB_USER',
'DB_PASSWORD',
'DB_PORT',
];

//Valida que las variables de entorno no esten vacias
const missingEnvironmentVariables = requiredEnvironmentVariables.filter(
    (name) => process.env[name] === undefined,
);

if (missingEnvironmentVariables.length > 0) {
throw new Error(
    `Missing database environment variables: ${missingEnvironmentVariables.join(', ')}`,
);
}
const databasePort = Number(process.env.DB_PORT);

if (!Number.isInteger(databasePort) || databasePort < 1 || databasePort > 65535) {
    throw new Error('DB_PORT must be a valid port number.');
}

const configuredDialect = process.env.DB_MANAGER?.trim().toLowerCase() ?? 'postgres';
const databaseDialect = ['postgre', 'postgresql'].includes(configuredDialect)
    ? 'postgres'
    : configuredDialect;

if (databaseDialect !== 'postgres') {
throw new Error('DB_MANAGER must be postgres.');
}
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
{
    host: process.env.DB_HOST,
    port: databasePort,
    dialect: databaseDialect,
    logging: true,
},
);
const User = userModel(sequelize);
const validateConnection = () => sequelize.authenticate();
export {
    sequelize,
    User,
    validateConnection
};
export default sequelize;