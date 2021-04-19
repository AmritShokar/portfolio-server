import { Application, Handler, Router } from "express";
import * as Http from "http";
import cors from 'cors'

import { IHttpServer, ServerStatus } from "./IHttpServer";

export class HttpServer implements IHttpServer{
    private httpServer: Http.Server;
    serverStatus: ServerStatus;

    constructor (private readonly driver: Application) {
        this.serverStatus = ServerStatus.STOPPED;
        console.log("Http server initialized");
        const corsOptions = {
            origin: '*',
            credentials: true
        }
        this.driver.use(cors(corsOptions))
    }

    registerHandler(path: string, handler: Handler): number {
        this.driver.use(path, handler);
        console.log("handler added");

        return this.driver._router.stack.length;
    }

    registerRoute(router: Router): number {
        this.driver.use(router);
        console.log("route added");
        
        return router.length;
    }

    start(): void {
        const httpPort = process.env.SERVER_PORT;
        this.httpServer = Http.createServer(this.driver).listen(httpPort);
        console.log("http server started at http://localhost:" + process.env.SERVER_PORT);
        this.serverStatus = ServerStatus.RUNNING;
    }

    stop(): void {
        if (this.httpServer != null) {
            this.httpServer.close();
            this.serverStatus = ServerStatus.STOPPED;
        }
    }

    getServerStatus(): ServerStatus {
        return this.serverStatus;
    }
}