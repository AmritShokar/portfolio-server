import supertest from "supertest";
import express, { Application } from "express";

import { GeneralRouter } from "../../src/routes/GeneralRoute";
import { GeneralController } from "../../src/controllers/GeneralController";
import { WeatherService } from "../../src/service/WeatherService";

jest.mock("../../src/service/WeatherService");

describe("General Routes for Http Server", () => {
    let driver: Application;
    let weatherService: WeatherService;
    let generalController: GeneralController;
    let generalRouter: GeneralRouter;

    // beforeEach(() => {
        
    // });

    it("return truez", () => {
        
        console.log("test");

        expect(true).toBe(true);
    });


});