export interface IGalleryService {
    // TODO: change boolean response to an error enum response
    upload(image: Express.Multer.File): Boolean;
}