import { Request, Response } from "express";

import { ClientResponse } from "../lib/httpClient/HttpClient";
import { IWeatherService } from "../service/IWeatherService";

export class GeneralController {
// Import and use body-parser here
    weatherService: IWeatherService;

    constructor(weatherService: IWeatherService) { 
        this.weatherService = weatherService;
    }

    getRoot(req: Request, res: Response) {
        res.sendFile("index.html", { root: './res' });
    }

    getFavIcon(req: Request, res: Response) {
        res.sendFile("favicon.ico", { root: './res' });
    }

    getTime(req: Request, res: Response) {
        let time = new Date().toDateString();

        res.status(200).send(time);
    }

    async getWeather(req: Request, res: Response) {
        let weatherData: ClientResponse = await this.weatherService.fetchWeatherData();
        let response = weatherData.error ? weatherData.error : weatherData.data;

        res.status(weatherData.statusCode)
           .send(response);
    }

}