import { ClientResponse } from "../../lib/httpClient/HttpClient";
import weatherData from "./Data.WeatherService";

class WeatherService {

    constructor() {}
    
    async fetchWeatherData(): Promise<ClientResponse> {
        return new Promise((resolve, reject) => {
            console.log(weatherData);

            let response = {
                statusCode: 200,
                data: weatherData
            }

            resolve(response);
        });
    }

}

const weatherService = new WeatherService();

export default weatherService;