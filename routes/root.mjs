import express from "express";
import HomeController from "../controllers/home_controller.mjs";
import CvController from "../controllers/cv_controller.mjs";
const rootRouter = express.Router();

rootRouter.get("/about", HomeController.about);
rootRouter.get("/", HomeController.index);
rootRouter.get("/cv", CvController.detail); 

export default rootRouter;
