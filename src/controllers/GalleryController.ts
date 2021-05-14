import { Request, Response } from "express";

import { GalleryService } from "../service/galleryService/GalleryService"

export class GalleryController {
    galleryService: GalleryService;

    // TODO: inject gallery service here
    constructor(galleryService: GalleryService) {
        this.galleryService = galleryService;
    }

    async postImage(req: Request, res: Response) {
        console.log("received image")

        console.log(req.file)

        // use gallery service to upload image
        // use async/await here

        const isUploaded = await this.galleryService.uploadImage(req.file);

        console.log("file uploaded succeeded: ", isUploaded);

        return res.status(200).send()
    }
}