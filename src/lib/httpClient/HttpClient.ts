import axios, { AxiosResponse, AxiosError } from "axios";

export class HttpClient {

    constructor() {

    }

    get(url: string, options: {}): void {

        axios.get(url).then((response: AxiosResponse) => {
            console.log(`HI: ${response}`);
        }).catch((error: AxiosError) => {
            console.log(`YO: ${error}`);
        });

        
    }






}