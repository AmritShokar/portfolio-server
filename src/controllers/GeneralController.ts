import { Request, Response} from "express";

export class GeneralController {

    constructor() {



    }

    // getTime(request: Express.Request, response: Express.Response): void {
        

    // }

    getTime(req: Request, res: Response) {
        res.status(200).send();
    }

}