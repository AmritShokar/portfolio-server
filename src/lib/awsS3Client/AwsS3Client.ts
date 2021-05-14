import aws, { S3 } from "aws-sdk"
import fs from "fs"

import { ClientResponse } from "../httpClient/ClientResponse";

// Config AWS credentials
aws.config.update({ region: "us-east-1" });
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY

export interface UploadParams {
    bucket: string;
    key: string;
    file: fs.ReadStream;
}

export class AwsS3Client {
    s3: S3;

    constructor() {
        this.s3 = new aws.S3();
    }

    async uploadFile(uploadParams: UploadParams): Promise<ClientResponse> {
        return new Promise( (resolve, reject) => {
            const params: S3.PutObjectRequest = {
                Bucket: uploadParams.bucket,
                Key: uploadParams.key,
                Body: uploadParams.file
            };

            this.s3.upload(params, (error, data) => {
                if (error) {
                    console.error("aws s3 client upload error: ", error);
                    reject();
                } else {
                    console.log("aws file upload succeeded");
                    console.log(data);
                    resolve({
                        statusCode: 201,
                        data: data.Location
                    });
                }
            });
        });
    }

}