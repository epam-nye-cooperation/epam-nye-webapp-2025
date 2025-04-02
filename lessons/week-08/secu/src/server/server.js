import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { verifyToken, verifyTokenMiddleware } from './verify-token.js';
import { createRoleMiddleware, userRoleMap } from './roles.js';
import { clearToken } from './clear-token.js';

dotenv.config();

process.on('unhandledRejection', (reason) => {
    console.error(reason);
    console.log('App still running ...');
});

const app = express();

app.use(express.json());

// TODO: csrf token :)

app.use((req, res, next) => {
    // can't use * with credentials: include
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    // has to be present when credentials: include
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }

    next();
});

app.use((req, res, next) => {
    console.log(req.get('cookie'));
    next();
});

app.get('/api/token', (req, res) => {
    try {
        const payload = verifyToken(req, res);
        !res.headersSent && res.send({ ...payload });
    } catch (e) {
        clearToken(res);
        !res.headersSent && res.status(403).send({ error: 'invalid token' });
    }
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).send({ error: 'missing username or password' });
        return;
    }

    // TODO: verify username & password :)

    const lifetime = 3600000;
    // const lifetime = 10;

    const payload = {
        iss: 'express',
        sub: username,
        roles: userRoleMap[username] || ['guest'], // ideally you'd have a more sophisticated way of assigning roles / checking users
        hello: 'world'
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', {
        expiresIn: lifetime // seconds
    });

    res.cookie('token', token, { httpOnly: true, maxAge: 3600000, sameSite: 'strict' });
    res.send({ ...payload });
});

app.post('/api/logout', verifyTokenMiddleware, (req, res) => {
    clearToken(res);
    res.send({ message: 'logged out' });
});

app.get('/api/protected', verifyTokenMiddleware, (req, res) => {
   res.send({ message: 'protected' });
});

app.get('/api/admin', createRoleMiddleware('admin'), (req, res) => {
    res.send({ message: 'admin' });
});

app.get('/api/guest', createRoleMiddleware('guest'), (req, res) => {
    res.send({ message: 'guest' });
});

app.listen(3001,  () => {
  console.log('Server is running on port 3001');
});
