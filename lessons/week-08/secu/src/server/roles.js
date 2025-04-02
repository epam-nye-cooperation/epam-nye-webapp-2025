import { verifyToken } from './verify-token.js';

export const userRoleMap = {
    'jordan': ['basic'],
    'jordan_admin': ['basic', 'admin'],
};

export function createRoleMiddleware(role) {
    return (req, res, next) => {
        try {
            const { roles } = verifyToken(req);

            if (roles.includes(role)) {
                next();
            } else {
                res.status(403).send({ error: 'forbidden' });
            }
        } catch (e) {
            res.status(403).send({ error: 'invalid token' });
        }
    };
}
