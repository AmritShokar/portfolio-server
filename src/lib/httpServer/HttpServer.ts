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

        this.auth = new Authenticator();
        this.registerAuth();
        console.log("Http server initialized");
    }

    registerAuth(): void {
        this.driver.use("/", (req: Express.Request, res: Express.Response, next: any) => {
            const bearer = req.headers.authorization ? req.headers.authorization : "";
            const token = bearer.split(" ")[1];
            const authResult: ValidationResult = this.auth.authenticate(token);
            if (!authResult.isValid) {
                res.status(401).send(authResult.errorMessage)
            } else {
                next()
            }
        });
    }

    registerRoute(route: Express.Router): void {
        this.driver.use(route);
        console.log("routes added");
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