import { rejects } from "assert";
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { resolve } from "path";

export interface ClientResponse {
    statusCode: number;
    data: any;
    error?: string;
}

export class HttpClient {

    constructor() {

    }

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