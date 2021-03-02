import * as Express from "express";
import * as Http from "http";

import { IHttpServer } from "./IHttpServer";
import { Authenticator, ValidationResult } from "../auth/Authenticator";

export class HttpServer implements IHttpServer{
    private httpServer: Http.Server;
    private auth: Authenticator;

    constructor (private readonly driver: Express.Application) {
        this.driver.use(Express.json());
        this.driver.get("/", (req, res) => {
            res.sendFile("index.html", { root: './res' });
        });
        this.driver.get("/favicon.ico", (req, res) => {
            res.sendFile("favicon.ico", { root: './res' });
        });

        this.auth = new Authenticator(this);
        console.log("Http server initialized");
    }

    registerHandler(path: string, handler: Express.Handler): void {
        this.driver.use(path, handler);
        console.log("handler added");
    }

    registerRoute(route: Express.Router): void {
        this.driver.use(route);
        console.log("route added");
    }

    start(): void {
        const httpPort = process.env.SERVER_PORT;
        this.httpServer = Http.createServer(this.driver).listen(httpPort);
        console.log("http server started at http://localhost:" + process.env.SERVER_PORT);
    }

    stop(): void {
        this.httpServer.close();
    }



}