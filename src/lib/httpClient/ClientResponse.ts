export interface ClientResponse {
    statusCode: number;
    data: any;
    error?: Error;
}