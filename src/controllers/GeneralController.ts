import { Request, Response} from "express";
import { WeatherService } from "src/service/WeatherService";

export class GeneralController {
// Import and use body-parser here
    weatherService: WeatherService;

    constructor(weatherService: WeatherService) { 
        this.weatherService = weatherService;
    }

    getTime(req: Request, res: Response) {
        res.status(200).send();
    }

    async getWeather(req: Request, res: Response) {
        let weatherData = await this.weatherService.fetchWeatherData();
        console.log(weatherData);

        res.status(200).send();
    }

}