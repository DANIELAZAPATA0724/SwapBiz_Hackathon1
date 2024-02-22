import ServiceController from "../../controllers/serviceController.js";
import Router from "express";

const v1ServiceRouter = Router();

v1ServiceRouter
    .get("/", ServiceController.getAllServices)
    .get("/:service_id", ServiceController.getService)
    .post("/", ServiceController.createNewService)
    .patch("/:service_id", ServiceController.updateOneService)
    .delete("/:service_id", ServiceController.deleteOneService)

export default v1ServiceRouter;