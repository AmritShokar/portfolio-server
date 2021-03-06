import { Http2ServerRequest } from "http2";
import * as Express from "express";

import { HttpServer } from "../../../src/lib/httpServer/HttpServer";


describe("HttpServer", () => {
    let express: Express.Application;
    let httpServer: HttpServer;

beforeEach(() => {
    express = Express();
    httpServer = new HttpServer(express);
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

    console.log(numberOfHandlers);

    expect(numberOfHandlers).toEqual(6); // Express contains 2 routes by default
});

it("returns the total number of routes in the router", () => {
    let router = Express.Router();

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
})

});