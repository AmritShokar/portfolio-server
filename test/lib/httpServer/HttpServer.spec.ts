import express, { Application, Router } from "express";

import { HttpServer } from "../../../src/lib/httpServer/HttpServer";
import { ServerStatus } from "../../../src/lib/httpServer/IHttpServer";

describe("HttpServer", () => {
    let driver: Application;
    let httpServer: HttpServer;

    beforeEach(() => {
        driver = express();
        httpServer = new HttpServer(driver);
    });

    it("returns the total number of handler functions", () => {
        httpServer.registerHandler("/test", (req, res) => {
            res.status(200).send();
        });
        httpServer.registerHandler("/test2", (req, res) => {
            res.status(200).send();
        });
        httpServer.registerHandler("/test/another", (req, res) => {
            res.status(200).send();
        });
        let numberOfHandlers = httpServer.registerHandler("/test/another2", (req, res) => {
            res.status(200).send();
        });

        expect(numberOfHandlers).toEqual(6); // Express contains 2 routes by default
    });

    it("returns the total number of routes in the router", () => {
        let router = Router();

        router.get("/", (req, res) => {
            res.status(200).send();
        });
        router.get("/test1", (req, res) => {
            res.status(200).send();
        });
        router.get("/test2", (req, res) => {
            res.status(200).send();
        });

        let numberOfRoutes = httpServer.registerRoute(router);

        expect(numberOfRoutes).toEqual(3);
    });

    it("starts the server", () => {
        httpServer.start();

        expect(httpServer.getServerStatus()).toBe(ServerStatus.RUNNING);
    });

    it("stops the server", () => {
        httpServer.stop();

        expect(httpServer.getServerStatus()).toBe(ServerStatus.STOPPED);
    });

});