import { AxiosRequestConfig } from "axios";

import { ClientResponse } from "../ClientResponse";
import { IHttpClient } from "../IHttpClient";
import weatherData from "../../models/_mocks_/Weather";

export class HttpClient implements IHttpClient {

    httpRequest(config: AxiosRequestConfig): Promise<ClientResponse> {
        return new Promise((resolve, reject) => {
            resolve({
                statusCode: 200,
                data: weatherData
            });
        });
    }
    
}