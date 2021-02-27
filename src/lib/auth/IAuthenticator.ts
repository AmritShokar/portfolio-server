// import * as JWT from "jsonwebtoken";

import { ValidationResult } from "./Authenticator";

export interface IAuthenticator {
    authenticate(token: string): ValidationResult;
}