import { Request, Response } from "express";

export class GalleryController {

    // TODO: inject gallery service here
    constructor() {

    }

    postImage(req: Request, res: Response) {
        console.log("received image")

        console.log(req.file)

        

        return res.status(200).send()
    }
}