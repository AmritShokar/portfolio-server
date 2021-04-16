import { AxiosRequestConfig, AxiosResponse } from "axios";
import { isLeft } from "fp-ts/lib/Either";

import { ClientResponse } from "../lib/httpClient/ClientResponse";
import { IHttpClient } from "../lib/httpClient/IHttpClient";
import { WeatherCodec } from "../lib/models/Weather";
import { IWeatherService } from "./IWeatherService";

export class WeatherService implements IWeatherService {
    weatherRequest: AxiosRequestConfig; // Create interface for request objects
    private httpClient: IHttpClient;

    constructor(httpClient: IHttpClient) {
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

    async fetchWeatherData(): Promise<ClientResponse> {
        try {
            const response: ClientResponse = await this.httpClient.httpRequest(this.weatherRequest);
            const weatherData = WeatherCodec.decode(response.data);

            if (isLeft(weatherData)) {
                return {
                    // returns 500 to show front end client a portfolio server error 
                    // and not a 403 weather api error
                    statusCode: 500,
                    data: "",
                    error: "missing weather data"
                }
            }

            return {
                statusCode: response.statusCode,
                data: weatherData.right
            };
        } catch(error) {
            return {
                statusCode: 500,
                data: "",
                error: "request failed internally"
            }
        }
    }  
}