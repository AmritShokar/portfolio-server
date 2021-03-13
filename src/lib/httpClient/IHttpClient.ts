import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ClientResponse } from "./ClientResponse";

export interface IHttpClient {
    httpRequest(config: AxiosRequestConfig): Promise<ClientResponse>;
}