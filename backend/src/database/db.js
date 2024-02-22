import { createPool } from 'mysql2/promise';
import dotenv from "dotenv";
dotenv.config()

const CONFIG = {
    host: process.env.BD_HOSTNAME,
    port: process.env.BD_PORT,
    user: process.env.BD_USERNAME,
    password: '',
    database: process.env.BD_NAME
};

export const pool = createPool(CONFIG);