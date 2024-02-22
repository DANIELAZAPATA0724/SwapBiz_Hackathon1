import { pool } from "../database/db.js";

const CategoriesModel = {
  getAllCategories: async () => {
    const query = "SELECT * FROM service_categories";
    const  [ rows ] = await pool.query(query);
    return rows;
  },
  getCategory: async (category_id) => {
    const query = `SELECT * FROM service_categories WHERE category_id = ${category_id}`;
    const [ rows ] = await pool.query(query);
    return rows;
  },
  createNewCategory: async (name) => {
    const [result] = await pool.query('INSERT INTO categories (name, user_id) VALUES (?, ?)', [name,]);
    return { result, name,};
  },
  updateOneCategory: async (categoryId, newName) => {
    const query =
      "UPDATE service_categories SET name = $1 WHERE category_id = $2 RETURNING *";
    const [ rows ]  = await pool.query(query, [newName, categoryId]);
    return rows[0];
  },
  deleteCategory: async (categoryId) => {
    const query = "DELETE FROM service_categories WHERE category_id = $1";
    await pool.query(query, [categoryId]);
    return true;
  },
};

export { CategoriesModel };
