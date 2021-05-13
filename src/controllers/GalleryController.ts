import { Request, Response } from "express";

export class GalleryController {

    // TODO: inject gallery service here
    constructor() {

    }

    postImage(req: Request, res: Response) {
        console.log("received image")

        console.log(req.file)

        // use gallery service to upload image
        // use async/await here

        return res.status(200).send()
    }
}