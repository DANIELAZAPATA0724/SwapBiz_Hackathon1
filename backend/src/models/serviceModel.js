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

const ServiceModel = db.define("services", {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
  Url_image: { type: DataTypes.STRING }
});
export default ServiceModel;