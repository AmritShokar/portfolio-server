import { Handler, Router } from "express";

export interface IHttpServer {
    registerHandler(path: string, handler: Handler): void;
    registerRoute(router: Router): void;
    start(): void;
    stop(): void;
}

export enum ServerStatus {
    RUNNING,
    STOPPED
}