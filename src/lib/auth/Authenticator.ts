import * as jwt from "jsonwebtoken";

import { IAuthenticator } from "./IAuthenticator";

export class Authenticator implements IAuthenticator{

    constructor() { }

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