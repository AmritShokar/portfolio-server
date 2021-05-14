import { ClientResponse } from "../../lib/httpClient/ClientResponse";

export interface IGalleryService {
    uploadImage(image: Express.Multer.File): Promise<ClientResponse>;
}