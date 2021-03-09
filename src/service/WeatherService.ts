import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { getOrElse, isLeft, isRight } from "fp-ts/lib/Either";
import { failure } from "io-ts/lib/PathReporter";

import { ClientResponse, HttpClient } from "../lib/httpClient/HttpClient";
import { Weather, WeatherCodec } from "../lib/models/Weather";

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

    async fetchWeatherData(): Promise<ClientResponse> {
        try {
            const response = await this.httpClient.httpRequest(this.weatherRequest);
            const weatherData = WeatherCodec.decode(response.data.main);

            if (isLeft(weatherData)) {
                return {
                    statusCode: 500,
                    data: "",
                    error: "missing weather data"
                }
            }

            return {
                statusCode: 200,
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