// import * as JWT from "jsonwebtoken";

export interface IAuthenticator {
    isAuthenticated(token: string): boolean
}