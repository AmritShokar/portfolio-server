import * as jwt from "jsonwebtoken";
import { Handler, Request, Response } from "express";

import { IAuthenticator } from "./IAuthenticator";
import { IHttpServer } from "../httpServer/IHttpServer";

export class Authenticator implements IAuthenticator{

    constructor(httpServer: IHttpServer) {
        const path: string = "/";
        const authHandler: Handler = (req: Request, res: Response, next: any) => {
            const bearer = req.headers.authorization ? req.headers.authorization : "";
            const token = bearer.split(" ")[1];
            const authResult: ValidationResult = this.authenticate(token);
            if (!authResult.isValid) {
                res.status(401).send(authResult.errorMessage)
            } else {
                next()
            }
        }
        httpServer.registerHandler(path, authHandler);
     }

    authenticate(token: string): ValidationResult {
        const secret = process.env.SECRET;
        if (secret != undefined) {
            try {
                jwt.verify(token, secret) as DecodeResult;
                return { isValid: true, errorMessage: undefined};
            }
            catch(error) {
                return { isValid: false, errorMessage: `Invalid token: ${error.message}`};
            }
        }        

        return { isValid: false, errorMessage: "No JWT token received"};
    }

    generateToken() {
        let data = { "name": process.env.TOKEN_DATA_VALUE };
        const secret = process.env.SECRET;
        if (secret != undefined) {
            const token = jwt.sign(data, secret);
            console.log(token);
        }
    }

}

export interface ValidationResult {
    isValid: boolean;
    errorMessage?: string;
}

export interface DecodeResult {
    name: string;
}