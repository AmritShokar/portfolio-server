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

    it("returns the weather info", async () => {
        const weatherData: ClientResponse = await weatherService.fetchWeatherData();
        expect(weatherData.statusCode).toBe(200)
        expect(weatherData.data).toEqual(weatherData);
    });


});