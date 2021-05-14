export interface IGalleryService {
    // TODO: change boolean response to an error enum response
    uploadImage(image: Express.Multer.File): Promise<Boolean>;
}