import * as dotenv from "dotenv";
dotenv.config();

import { VideoStreamingService } from "./PortfolioServer";

console.log("express app running");

const service = new VideoStreamingService();

service.start();