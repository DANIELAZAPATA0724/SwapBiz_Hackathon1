import { Sequelize } from "sequelize";



const db = new Sequelize ("swapbizz_hakathon", "root", "123456789", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    password: "123456789"
  });

export default db;

/* import { createPool } from 'mysql2/promise'; */
/* import dotenv from "dotenv";
dotenv.config() */

/* const CONFIG = {
    host: process.env.BD_HOSTNAME,
    port: process.env.BD_PORT,
    user: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME
}; */


/* export const pool = createPool(CONFIG); */