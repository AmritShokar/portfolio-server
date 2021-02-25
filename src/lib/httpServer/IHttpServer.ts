import { Router } from "express";

export interface IHttpServer {
    registerRoute(router: Router): void;
    start(): void;
    stop(): void;
}