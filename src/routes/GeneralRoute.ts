import { Router } from "express"

import { GeneralController } from "../controllers/GeneralController";

export class GeneralRouter {
    controller: GeneralController;
    router: Router;

    constructor(generalController: GeneralController) {
        this.router = Router();
        this.controller = generalController;
        this.addRoutes();
    }
    
    private addRoutes() {
        this.router.get("/", this.controller.getRoot);
        this.router.get("/favicon.ico", this.controller.getFavIcon);
        this.router.get("/time", this.controller.getTime);
        this.router.get("/weather", this.controller.getWeather.bind(this.controller));
    }

    getRouter(): Router {
        return this.router;
    }


}