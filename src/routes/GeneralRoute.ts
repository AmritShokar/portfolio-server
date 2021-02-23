import { Router } from "express"
import { GeneralController } from "src/controllers/GeneralController";

export class GeneralRouter {
    router: Router = Router();

    constructor(generalController: GeneralController) {
        this.addRoutes();
    }
    
    private addRoutes() {
        this.router.get("/time", (req,res) => {
            res.status(200).send();
        });
    }

    getRouter(): Router {
        return this.router;
    }


}

// let router = Router();

// router.get("/time", (req,res) => {
//     res.status(200).send();
// });

// export = router;