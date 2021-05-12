import { Router } from "express"

import { IRoute } from "./IRoute"
import { GeneralController } from "../controllers/GeneralController";

export class GeneralRouter implements IRoute {
    path = "/general";
    controller: GeneralController;
    router: Router;

    constructor(generalController: GeneralController) {
        this.router = Router();
        this.controller = generalController;
        this.addRoutes();
    }
    
    private addRoutes() {
        this.router.get(this.path + "/", this.controller.getRoot);
        this.router.get(this.path + "/favicon.ico", this.controller.getFavIcon);
        this.router.get(this.path + "/time", this.controller.getTime);
        this.router.get(this.path + "/weather", this.controller.getWeather.bind(this.controller));
    }

    getRouter(): Router {
        return this.router;
    }
}