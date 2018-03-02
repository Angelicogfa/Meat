import { Request, Response } from "express";
import { API_PASSWORD } from "./api.config";
import * as jwt from 'jsonwebtoken';

export const handAuthorization = (req: Request, resp: Response, next) => {
    const token = extractToken(req);

    if (!token) {
        resp.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"');
        resp.status(401).json({ message: 'Você precisa se autenticar' });
    } else {
        jwt.verify(token, API_PASSWORD, (error, decoded) => {
            if (decoded) {
                next();
            } else {
                resp.status(403).json({ message: 'Você não está autorizado a acessar o recurso' });
            }
        });
        //Todo
    }
}

function extractToken(request: Request): string {
    let token = undefined;

    if (request.headers && request.headers.authorization) {
        const parts: string[] = request.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }

    return token;
}