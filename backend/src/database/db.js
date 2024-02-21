import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
dotenv.config();


const { DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const config = {
    host: DB_HOSTNAME,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME
};

export const pool = mysql.createPool(config);