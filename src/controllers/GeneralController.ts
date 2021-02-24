import { Request, Response} from "express";

export class GeneralController {

    constructor() { }

    getTime(req: Request, res: Response) {
        res.status(200).send();
    }

}