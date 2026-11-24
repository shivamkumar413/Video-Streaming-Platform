import type { NextFunction, Request, Response } from "express";
import type { ZodType } from "zod";
import { badRequest } from "../utils/errors/api-error.ts";

export const validate = (schema : ZodType)=>{
    return (req : Request, res : Response, next : NextFunction)=>{

        const result = schema.safeParse(req.body)

        if(!result.success){
            throw badRequest('Validation failed', result.error.issues)
        }

        req.body = result.data;
        next();
    }
}