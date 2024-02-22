import { CategoriesModel } from "../models/categoriesModel.js";

const CategoriesController = {
  getAllCategories: async (req, res) => {
    try {
      const allCategories = await CategoriesModel.getAllCategories();
      
      res.send(allCategories);
    } catch (error) {
      res.status(500).json({ error: "Ocurrió un error al obtener todas las categorías" });
    }
  },
  getCategory: async (req, res) => {
    try {
      const id = req.params.category_id;
      const Category = await CategoriesModel.getCategory(id);
      res.send(Category);
    } catch (error) {
      res.status(500).json({ error: "Ocurrió un error al obtener todas las categorías" });
    }
  },
  createNewCategory: async (req, res) => {
    const { name } = req.body;
    if (!name ) {
      return res.status(400).json({ error: "El nombre de la categoría y el ID del usuario son campos obligatorios" });
    }
    try {
      const createdCategory = await CategoriesModel.createNewCategory(name);
      res.json(createdCategory);
    } catch (error) {
      res.status(500).json({ error: "Ocurrió un error al crear la categoría" });
    }
  },
  updateOneCategory: async (req, res) => { 
    try {
      const updatedCategory = await CategoriesModel.updateOneCategory(req.params.category_id, req.body.name);
      console.log("Updated category:", updatedCategory); 
      res.json(updatedCategory);
    } catch (error) {
      console.error("Error al actualizar la categoría:", error);
      res.status(500).json({ error: "Ocurrió un error al actualizar la categoría" });
    }
  },
  deleteOneCategories: async (req, res) => {
    try {
      await CategoriesModel.deleteCategory(req.params.categoryId);
      res.json({ message: "Categoría eliminada correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Ocurrió un error al eliminar la categoría" });
    }
  }
};

export default CategoriesController ;