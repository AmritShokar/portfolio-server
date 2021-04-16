import { Request, Response } from "express";

import { ClientResponse } from "../lib/httpClient/ClientResponse";
import { IWeatherService } from "../service/IWeatherService";

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

        res.status(200).send(time);
    }

    async getWeather(req: Request, res: Response) {
        let weatherData: ClientResponse = await this.weatherService.fetchWeatherData();
        let response = weatherData.error ? weatherData.error : weatherData.data;
        
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        // res.setHeader('Access-Control-Allow-Credentials', true);
        return res.status(weatherData.statusCode).send(response);
    }

}