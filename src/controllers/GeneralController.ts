import { Request, Response} from "express";
import { WeatherService } from "src/service/WeatherService";

export class GeneralController {
// Import and use body-parser here
    constructor(weatherService: WeatherService) { }

    getTime(req: Request, res: Response) {
        res.status(200).send();
    }

}