import { Router } from "express";
import { HomeController } from "../controllers/homeController/Home";
import { IHomeController } from "../controllers/homeController/IHome";

const home = Router();
const homeController: IHomeController = new HomeController();

home.get('/', homeController.index);
home.post('/', homeController.create);
home.put('/:id', homeController.update);
home.delete('/:id', homeController.delete);

export { home };