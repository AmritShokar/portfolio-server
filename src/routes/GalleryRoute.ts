import { Router } from "express";

import { IRoute } from "./IRoute";
import { GalleryController } from "../controllers/GalleryController";

import multer from "multer";
const upload = multer({ dest: 'uploads/' })

export class GalleryRouter implements IRoute {
    path = process.env.API_VERSION+"/gallery";
    controller: GalleryController;
    router: Router;

    constructor(controller: GalleryController) {
        this.router = Router()
        this.controller = controller;
        this.addRoutes();
    }

    private addRoutes() {
        this.router.post(
            this.path + "/image", 
            upload.single('image'), 
            this.controller.postImage.bind(this.controller)
        );
    }

    getRouter(): Router {
        return this.router;
    }
}