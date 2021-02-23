import * as Express from "express";
import * as Http from "http";

import * as generalRouter from "../routes/GeneralRoute";

export class HttpServer {
    private httpServer: Http.Server;

    constructor (private readonly driver: Express.Application) {
        console.log("Http Server set");
        this.addRoutes();
    }

    start(): void {
        const httpPort = process.env.SERVER_PORT;
        // this.httpServer = Http.createServer(this.driver).listen(httpPort);
        this.driver.listen(4444);
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

    addRoutes(): void {
        console.log("routes added");
        // this.driver.use(generalRouter);
        this.driver.get('/', (req, res) => {
            res.sendFile("index.html", { root: './res' });
        });
        this.driver.get("/favicon.ico", (req, res) => {
            res.sendFile("favicon.ico", { root: './res' });
        });
        this.driver.get("/time", (req, res) => {
            res.status(200).send();
        });
    }





}