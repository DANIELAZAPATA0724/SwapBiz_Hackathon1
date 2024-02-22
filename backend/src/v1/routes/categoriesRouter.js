
import categoriesController from "../../controllers/categoriesController.js";

import Router from "express";

const v1CategoriesRouter = Router();

v1CategoriesRouter
    .get("/", categoriesController.getAllCategories)
    .get("/:category_id", categoriesController.getCategory)
    .post("/", categoriesController.createNewCategory)
    .patch("/:categoryId", categoriesController.updateOneCategory)
    .delete("/:categoryId", categoriesController.deleteOneCategories)

export default v1CategoriesRouter;