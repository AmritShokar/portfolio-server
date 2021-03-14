import { AxiosRequestConfig } from "axios";

import { ClientResponse } from "../ClientResponse";
import { IHttpClient } from "../IHttpClient";
import weatherData, { invalidWeatherData } from "../../models/_mocks_/Weather";

export class HttpClient implements IHttpClient {

    httpRequest(config: AxiosRequestConfig): Promise<ClientResponse> {

        return new Promise((resolve, reject) => {
            if (config.url == "http://invalid.com") {
                resolve({
                    statusCode: 400,
                    data: invalidWeatherData
                });
            } else if (config.url == "http://request-failed.com") {
                reject();
            }
            else {
                resolve({
                    statusCode: 200,
                    data: weatherData
                });
            }
        });
    }
    
}