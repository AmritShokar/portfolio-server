import * as Express from "express";

export class VideoStreaming {
    readonly express: Express.Application;

    constructor() {
        this.express = Express();
    }

    start(): void {
        // Init and inject Dependencies here for services
        
    }

}