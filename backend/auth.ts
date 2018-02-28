import { Request, Response } from 'express'
import { User, users } from "./users";
import { API_PASSWORD } from "./api.config";
import * as jwt from 'jsonwebtoken';

export const handleAuthentication = (req: Request, resp: Response) => {
    const user = req.body;

    if (isValid(user)) {
        const dbUser = users[user.email];
        const token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, API_PASSWORD);
        resp.json({ name: dbUser.name, email: dbUser.email, acessToken: token });
    }
    else {
        resp.status(403).json({ message: 'Dados inválidos' });
    }
}

function isValid(user: User): boolean {
    if (!user)
        return false;

    const dbUser = users[user.email];
    return dbUser != undefined && dbUser.matches(user);
}