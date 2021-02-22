import * as dotenv from "dotenv";
dotenv.config();

import { VideoStreamingService } from "./VideoStreamingService";

console.log("Node app running");

const service = new VideoStreamingService();

service.start();