import { ClientResponse, HttpClient } from "../../lib/httpClient/HttpClient";
import { IWeatherService } from "../IWeatherService";

export class WeatherService implements IWeatherService {
    httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }
    
    async fetchWeatherData(): Promise<ClientResponse> {
        return new Promise((resolve, reject) => {
            resolve({
                statusCode: 500,
                data: "Sunny"
            });
        });
    }
}