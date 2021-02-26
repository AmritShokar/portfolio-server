import * as jwt from "jsonwebtoken";

import { IAuthenticator } from "./IAuthenticator";

export class Authenticator implements IAuthenticator{

    constructor() {}

    isAuthenticated(token: string): boolean {
        return this.authenticate(token);
    }

    private authenticate(token: string): boolean {
        const secret = process.env.SECRET;
        if (secret != undefined) {
            const object = jwt.verify(token, secret);
            console.log(object);
        }
        

        

        return false;
    }

    generateToken() {
        let data = { "name": "ambo" };
        const secret = process.env.SECRET;
        if (secret != undefined) {
            const token = jwt.sign(data, secret);
            console.log(token);
        }
    }

}