import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
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
            console.log(`YO: ${error}`);
        });
    }

    async httpRequest(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            axios(config)
            .then((response: AxiosResponse) => {
                resolve(response);
            })
            .catch((error: AxiosError) => {
                reject();
            });
        });
    }
}