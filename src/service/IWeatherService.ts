import { ClientResponse } from "../lib/httpClient/ClientResponse";

export interface IWeatherService {
    fetchWeatherData(): Promise<ClientResponse>
}