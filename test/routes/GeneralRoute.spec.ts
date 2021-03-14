import supertest, { Response } from "supertest";
import express, { Application } from "express";

import { GeneralRouter } from "../../src/routes/GeneralRoute";
import { GeneralController } from "../../src/controllers/GeneralController";
import { HttpClient } from "../../src/lib/httpClient/HttpClient";
import { ClientResponse } from "../../src/lib/httpClient/ClientResponse";
import { WeatherService } from "../../src/service/_mocks_/WeatherService";
import weatherData from "../../src/lib/models/_mocks_/Weather";

describe("General Routes for Http Server", () => {
    let driver: Application;
    let weatherService: WeatherService;
    let generalController: GeneralController;
    let generalRouter: GeneralRouter;

    beforeEach(() => {
        weatherService = new WeatherService(new HttpClient());
        generalController = new GeneralController(weatherService);
        generalRouter = new GeneralRouter(generalController);

        driver = express();
        driver.use(generalRouter.getRouter());
    });

    it("tests a mock", async () => {
        const weatherData: ClientResponse = await weatherService.fetchWeatherData();

        expect(weatherData.statusCode).toBe(500);
    });

    it("returns 200 for valid request", () => {
        const path = "/general/time";
        return supertest(driver).get(path).expect(200);
    });

    it("returns a 404 for an invalid route", () => {
        const path = "/general/invalid";
        return supertest(driver).get(path).expect(404);
    });

    it("returns the weather", () => {
        const path = "/general/weather";
        let response = {
            statusCode: 500,
            data: "sunny"
        }

        return supertest(driver).get(path).expect(response.data).expect(response.statusCode);
    });

});