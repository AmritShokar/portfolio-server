import { WeatherService } from "../../src/service/WeatherService";
import { IHttpClient } from "../../src/lib/httpClient/IHttpClient";
import { HttpClient } from "../../src/lib/httpClient/_mocks_/HttpClient";
import { ClientResponse } from "../../src/lib/httpClient/ClientResponse";
import weatherData from "../../src/lib/models/_mocks_/Weather"

describe("Weather Service", () => {
    let httpClient: IHttpClient;
    let weatherService: WeatherService;

    beforeEach(() => {
        httpClient = new HttpClient();
        weatherService = new WeatherService(httpClient);
    });

    it("returns 200 for a valid weather request", async () => {
        const response: ClientResponse = await weatherService.fetchWeatherData();
        expect(response.statusCode).toBe(200);
        expect(response.data).toBe(weatherData);
    });

    it("returns 500 for an invalid model response", async () => {
        weatherService.weatherRequest.url = "http://invalid.com";
        const response: ClientResponse = await weatherService.fetchWeatherData();
        expect(response.statusCode).toBe(500);
        expect(response.data).not.toBe(weatherData);
    });

    it("returns 500 for a failed request", async () => {
        weatherService.weatherRequest.url = "http://request-failed.com";
        const response: ClientResponse = await weatherService.fetchWeatherData();
        expect(response.statusCode).toBe(500);
        expect(response.data).not.toBe(weatherData);
    });
});