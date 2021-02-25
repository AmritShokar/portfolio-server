import { Request, Response} from "express";

export class GeneralController {
// Import and use body-parser here
    constructor() { }

    getTime(req: Request, res: Response) {
        res.status(200).send();
    }

}