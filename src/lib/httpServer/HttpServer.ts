import * as Express from "express";
import * as Http from "http";

import { IHttpServer } from "./IHttpServer";
import { Authenticator, ValidationResult } from "../auth/Authenticator";

export class HttpServer implements IHttpServer{
    private httpServer: Http.Server;
    // private auth: Authenticator;

    constructor (private readonly driver: Express.Application) {
        this.driver.use(Express.json());
        console.log("Http server initialized");
    }

    registerHandler(path: string, handler: Express.Handler): number {
        this.driver.use(path, handler);
        console.log("handler added");

        return this.driver._router.length;
    }

    registerRoute(router: Express.Router): number {
        this.driver.use(router);
        console.log("route added");
        
        const routerData: Express.Router = this.driver._router;
        return routerData.length;
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