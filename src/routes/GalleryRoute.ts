import { Router } from "express"

import { IRoute } from "./IRoute"
// import Gallery Controller here

export class GalleryRoute implements IRoute {
    path = "/gallery";
    // controller: GalleryController;
    router: Router;

    constructor(/*controller: GalleryController*/) {

    }

    private addRoutes() {
        
    }

    getRouter(): Router {
        return this.router
    }
}