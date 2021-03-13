import { IHttpClient } from "../../lib/httpClient/IHttpClient";
import { ClientResponse } from "../../lib/httpClient/ClientResponse";
import { IWeatherService } from "../IWeatherService";

export class WeatherService implements IWeatherService {
    httpClient: IHttpClient;

    constructor(httpClient: IHttpClient) {
        this.httpClient = httpClient;
    }
    
    async fetchWeatherData(): Promise<ClientResponse> {
        return new Promise((resolve, reject) => {
            resolve({
                statusCode: 500,
                data: "sunny"
            });
        });
    }
}