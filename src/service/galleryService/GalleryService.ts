import { AwsS3Client, UploadParams } from "../../lib/awsS3Client/AwsS3Client";
import fs from "fs";

import { IGalleryService } from "./IGalleryService";
import { ClientResponse } from "../../lib/httpClient/ClientResponse";

export class GalleryService implements IGalleryService {
    s3Client: AwsS3Client;

    constructor(s3Client: AwsS3Client) {
        this.s3Client = s3Client
    }

    async uploadImage(image: Express.Multer.File): Promise<ClientResponse> {
        let filestream = fs.createReadStream(image.path);

        filestream.on("error", (error) => {
            console.log("image file stream error: ", error);
            return {
                statusCode: 500,
                data: "",
                error: new Error("error occured while uploading image")
            };
        });

        const uploadParams: UploadParams = {
            bucket: "gallery-bucket-amritpalshokar.com",
            key: image.filename,
            file: filestream
        }

        try {
            return await this.s3Client.uploadFile(uploadParams);
        } catch {
            return {
                statusCode: 500,
                data: "",
                error: new Error("error occured while uploading image")
            };
        }
    }

}