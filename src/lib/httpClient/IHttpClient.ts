import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface ClientResponse {
    statusCode: number;
    data: any;
    error?: string;
}

export interface IHttpClient {
    httpRequest(config: AxiosRequestConfig): Promise<AxiosResponse>
}