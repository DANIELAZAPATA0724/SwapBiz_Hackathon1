/* import { pool } from "../database/db.js";

const ServiceModel = {
  getAllServices: async () => {
            const [rows] = await pool.query("SELECT * FROM services");
            return rows;     
  },
  getservice: async (service_id) => {
            const [rows] = await pool.query("SELECT * FROM services WHERE service_id = ?", [service_id]);
            return rows;
   
  },
  createNewservice: async (serviceData) => {
        console.log (serviceData)
            const [result] = await pool.query("INSERT INTO services SET ?", [serviceData]);
            return result;
    },
  updateOneservice: async (serviceId, serviceData) => {
          const { name, price, category_id, description } = serviceData;
          if (!name || !price || !category_id || !description) {
            throw new Error("name, price y category_id son campos obligatorios");
          }
          const query = 'UPDATE services SET name = ?, price = ?, category_id = ?, description = ? WHERE service_id = ?';
          const [result] = await pool.query(query, [name, price, category_id, description, serviceId]);
          console.log(result);
          return result;
      },
  deleteOneservice: async (service_id) => {
          const query = 'DELETE FROM services WHERE service_id = ?';
          const [result] = await pool.query(query, [service_id]);
          return result;
      },
  updateStock: async (service_id, is_available) => {
          const query = 'UPDATE services SET is_available = ? WHERE service_id = ?';
          const [result] = await pool.query(query, [is_available, service_id]);
          return result;
      },
};

export { ServiceModel } */

//importamos sequelize
import { DataTypes } from "sequelize";
<<<<<<< HEAD
import db from "../database/db.js";

const ServiceModel = db.define("services", 
{
  
    id : { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    price: { type: DataTypes.DECIMAL(10,2) },
    category_id: { type: DataTypes.INTEGER },
    is_available: { type: DataTypes.BOOLEAN },
    user_id: { type: DataTypes.INTEGER },
    service_id: { type: DataTypes.INTEGER },
    
=======
import db from "../database/db.js"

const ServiceModel = db.define("services", {
  service_id: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  price: { type: DataTypes.DECIMAL },
  category_id: { type: DataTypes.STRING },
  user_id: { type: DataTypes.STRING },
  is_available : { type: DataTypes.BOOLEAN }
>>>>>>> fe706193cea3e568088d39cb94be7169ce44ec81
});


export default ServiceModel;