import * as dotenv from "dotenv";
dotenv.config();

import express from "express";

import { HttpServer } from "../../../src/lib/httpServer/HttpServer";
import { Authenticator, ValidationResult } from "../../../src/lib/auth/Authenticator";

describe("authenticator for express serveer", () => {
    let authenticator: Authenticator;

    beforeAll(() => {
        authenticator = new Authenticator(new HttpServer(express()));
    });

    it("validates a jwt token", () => {
        const testToken: string = process.env.TEST_TOKEN ? process.env.TEST_TOKEN : "";
        const testSecret: string = process.env.TEST_SECRET ? process.env.TEST_SECRET : "";

        const validationResult: ValidationResult = authenticator.authenticate(testToken, testSecret);

        expect(validationResult.isValid).toBe(true);
    });

    it("Invalidates a jwt token", () => {
        const invalidTestToken: string = process.env.INVALID_TEST_TOKEN ? process.env.INVALID_TEST_TOKEN : "";
        const testSecret: string = process.env.TEST_SECRET ? process.env.TEST_SECRET : "";

        const validationResult: ValidationResult = authenticator.authenticate(invalidTestToken, testSecret);

        expect(validationResult.isValid).toBe(false);
    });
});