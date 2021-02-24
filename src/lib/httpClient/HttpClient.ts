import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";

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

    httpRequest(config: AxiosRequestConfig) {
        axios(config)
        .then((response) => {

        })
        .catch((error) => {

        });
    }






}