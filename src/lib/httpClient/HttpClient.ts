import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";

import { ClientResponse } from "./ClientResponse";
import { IHttpClient } from "./IHttpClient";

export class HttpClient implements IHttpClient {

    constructor() { }

    // use promise to return request data
    get(url: string, options: {}): void {
        axios.get(url)
        .then((response: AxiosResponse) => {
            console.log(response.data);
        })
        .catch((error: AxiosError) => {
            console.log(error);
        });
    }

    async httpRequest(config: AxiosRequestConfig): Promise<ClientResponse> {
        return new Promise((resolve, reject) => {
            axios(config)
            .then((response: AxiosResponse) => {
                resolve({
                    statusCode: response.status,
                    data: response.data.main
                });
            })
            .catch((error: AxiosError) => {
                reject();
            });
        });
    }
}