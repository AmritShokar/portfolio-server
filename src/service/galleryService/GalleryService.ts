import { IGalleryService } from "./IGalleryService";


export class GalleryService implements IGalleryService {

    constructor() {

    }

    upload(image: Express.Multer.File): Boolean {

        

        return false;
    }

}