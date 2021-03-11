import supertest from "supertest";
import express, { Application } from "express";

import { GeneralRouter } from "../../src/routes/GeneralRoute";
import { GeneralController } from "../../src/controllers/GeneralController";
import { ClientResponse, HttpClient } from "../../src/lib/httpClient/HttpClient";
import { WeatherService } from "../../src/service/_mocks_/WeatherService";

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
        const path = "/general/time"
        console.log("here");
        return supertest(driver).get(path).expect(200);

        // expect(true).toBe(true);
    });

});