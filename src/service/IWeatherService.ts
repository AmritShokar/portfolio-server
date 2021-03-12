import { ClientResponse } from "../lib/httpClient/IHttpClient";

export interface IWeatherService {
    fetchWeatherData(): Promise<ClientResponse>
}