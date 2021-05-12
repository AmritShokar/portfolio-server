import { Request, Response } from "express";

import { ClientResponse } from "../lib/httpClient/ClientResponse";
import { IWeatherService } from "../service/weatherService/IWeatherService";

export class GeneralController {
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

        return res.status(200).send(time);
    }

    async getWeather(req: Request, res: Response) {
        let weatherData: ClientResponse = await this.weatherService.fetchWeatherData();
        let response = weatherData.error ? weatherData.error : weatherData.data;

        return res.status(weatherData.statusCode).send(response);
    }

}