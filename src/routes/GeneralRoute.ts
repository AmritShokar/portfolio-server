import { Router } from "express"
import { GeneralController } from "src/controllers/GeneralController";

export class GeneralRouter {
    controller: GeneralController;
    router: Router = Router();

    constructor(generalController: GeneralController) {
        this.controller = generalController;
        this.addRoutes();
    }
    
    private addRoutes() {
        this.router.get("/time", this.controller.getTime);
    }

    getRouter(): Router {
        return this.router;
    }


}