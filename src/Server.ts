import * as dotenv from "dotenv";
dotenv.config();

import { VideoStreamingService } from "./VideoStreamingService";

console.log("Node app running");

const service = new VideoStreamingService();

service.start();

// Install Morgan later
// Figure out how Redis works
// Figure out how io-ts works
// Figure out Node.js fs module