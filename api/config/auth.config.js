/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import expressJwt from 'express-jwt';
import { ErrorType, HandledError } from '../errors/handled.error';

const ERROR_MESSAGE = 'You do not have permission to access this resource.';

module.exports = app => {
    return new Promise((resolve, reject) => {
        try {
            app.use(
                expressJwt({ secret: process.env.JWT_SECRET }).unless({
                    path: ['/health', '/auth/authenticate']
                })
            );

            app.use((err, req, res, next) => {
                if (err.name === 'UnauthorizedError') {
                    next(new HandledError(ErrorType.SECURITY, ERROR_MESSAGE, err));
                }
            });

            resolve(app);
        } catch (err) {
            reject(err);
        }
    });
};
