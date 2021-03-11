import { ClientResponse } from "../lib/httpClient/HttpClient";

export interface IWeatherService {
    fetchWeatherData(): Promise<ClientResponse>
}