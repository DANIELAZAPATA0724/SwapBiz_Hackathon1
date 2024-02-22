import { Sequelize } from "sequelize";

<<<<<<< HEAD


const db = new Sequelize ("swapbizz_hakathon", "root", "123456789", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    password: "123456789"
=======
const db = new Sequelize("swapbizz_hakathon", "root", "", {
    host: "localhost",
    dialect: "mysql",
     port: 3306 
>>>>>>> fe706193cea3e568088d39cb94be7169ce44ec81
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