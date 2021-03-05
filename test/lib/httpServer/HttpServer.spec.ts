import { Http2ServerRequest } from "http2";
import * as Express from "express";

import { HttpServer } from "../../../src/lib/httpServer/HttpServer";
import { assert } from "node:console";


describe("HttpServer", () => {
    const httpServer = new HttpServer(Express());

beforeEach(() => {

});

it("returns the total number of handler functions", () => {
    let numberOfHandlers: number = 0;
    numberOfHandlers = httpServer.registerHandler("/test", (req, res) => {
        res.status(200).send();
    });
    numberOfHandlers = httpServer.registerHandler("/test2", (req, res) => {
        res.status(200).send();
    });

    expect(numberOfHandlers).toEqual(1);
});

});