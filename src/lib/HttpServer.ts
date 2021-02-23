import { timeStamp } from "console";
import * as Express from "express";
import * as Http from "http";

import * as generalRouter from "../routes/GeneralRoute";
import { IHttpServer } from "./IHttpServer";

export class HttpServer implements IHttpServer{
    private httpServer: Http.Server;

    constructor (private readonly driver: Express.Application) {
        console.log("Http Server set");
        this.driver.get('/', (req, res) => {
            res.sendFile("index.html", { root: './res' });
        });
        this.driver.get("/favicon.ico", (req, res) => {
            res.sendFile("favicon.ico", { root: './res' });
        });
        //Delete this
        this.driver.use(generalRouter);
    }

    start(): void {
        const httpPort = process.env.SERVER_PORT;
        this.httpServer = Http.createServer(this.driver).listen(httpPort);
        console.log("http server started at http://localhost:" + process.env.SERVER_PORT);
    }

    stop(): void {
        this.httpServer.close();
    }

    auth(): void {
        // use this for auth
        // all requests will go through this path
        // app.use(function (req, res, next) {
        //     next()
        // })
    }

    registerRoute(route: Express.Router): void {
        // this.driver.use(generalRouter);
        this.driver.use(route);
        console.log("route added");
    }





}