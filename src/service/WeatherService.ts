import { HttpClient } from "src/lib/httpClient/HttpClient";
import { AxiosRequestConfig } from "axios";

export class WeatherService {
    weatherRequest: AxiosRequestConfig;
    httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
        this.weatherRequest = {
            method: "get",
            url: "http://api.openweathermap.org/data/2.5/weather",
            params: {
                appid: process.env.WEATHER_API_KEY,
                id: process.env.LOCATION_ID,
                units: process.env.METRIC_UNIT
            }
        }
    }

    async fetchWeatherData() {
        console.log("Making weather request");
        console.log(process.env.WEATHER_API_KEY);
        console.log(process.env.LOCATION_ID);
        let response = await this.httpClient.httpRequest(this.weatherRequest);
        console.log("HERE");
        console.log(response);
    }

    
}