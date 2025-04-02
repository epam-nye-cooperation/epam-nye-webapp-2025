import jwt from 'jsonwebtoken';
import { clearToken } from './clear-token.js';

export function verifyToken(req, res) {
    const cookie = req.get('cookie');
    const cookies = cookie?.split(';');

    const tokenCookie = cookies?.find((cookie) => cookie.includes('token'));

    if (!tokenCookie) {
        res.status(401).send({ error: 'missing token' });
        return;
    }

    const token = tokenCookie.split('=')[1];

    return jwt.verify(token, process.env.JWT_SECRET || 'secret');
}

export function verifyTokenMiddleware(req, res, next) {
    try {
        verifyToken(req, res);
        next();
    } catch (e) {
        clearToken(res);
        res.status(403).send({ error: 'invalid token' });
    }
}
