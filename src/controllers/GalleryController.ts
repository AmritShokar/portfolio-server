import { Request, Response } from "express";

import { GalleryService } from "../service/galleryService/GalleryService";
import { ClientResponse } from "../lib/httpClient/ClientResponse";

export class GalleryController {
    galleryService: GalleryService;

    constructor(galleryService: GalleryService) {
        this.galleryService = galleryService;
    }

    async postImage(req: Request, res: Response) {
        // TODO: remove console log after testing
        console.log(req.file);

        const response: ClientResponse = await this.galleryService.uploadImage(req.file);

        return res.status(response.statusCode).send(response.error ? response.error.message : undefined);
    }
}