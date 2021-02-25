import { rejects } from "assert";
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { resolve } from "path";

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

    async httpRequest(config: AxiosRequestConfig): Promise<void> {
        console.log("Making weather request 2");
        axios(config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error("Request failed");
        });
    }






}