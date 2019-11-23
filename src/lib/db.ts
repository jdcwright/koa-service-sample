import Knex from 'knex';
import { dbuser, dbpassword, dbhost, db, dbPoolMin, dbPoolMax } from '../config';

const dbConnection = `postgres://${dbuser}:${dbpassword}@${dbhost}/${db}`;
const knexConfig = {
    client: 'pg',
    connection: dbConnection,
    pool: {
        min: dbPoolMin,
        max: dbPoolMax
    }
};

export default Knex(knexConfig);
