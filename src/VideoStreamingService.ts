import * as Express from "express";

export class VideoStreamingService {
    readonly express: Express.Application;

    constructor() {
        this.express = Express();
        console.log("express initialized");
    }

    start(): void {
        // Init and inject Dependencies here for services
        
    }

}