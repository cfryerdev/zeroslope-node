import jwt from 'jsonwebtoken';
import { ErrorType, HandledError } from '../errors/handled.error';

const service = {};

const expireMin = 60;
const {
    JWT_CLIENT_ID,
    JWT_SECRET,
    JWT_ISSUER
} = process.env;

// ==================================================

service.generate = (clientId, secret) => {
    return new Promise((resolve, reject) => {
        try {
            // TODO: Make authentication more robust
            if (clientId === JWT_CLIENT_ID && secret === JWT_SECRET) {
                const current = Math.floor(Date.now() / 1000);

                resolve({
                    type: 'Bearer',
                    token: jwt.sign({
                        data: {}, // Data to store
                        algorithm: 'HS256', // Algorithm
                        expiresIn: current + (expireMin * 60), // Expires
                        issuer: JWT_ISSUER, // Issuer
                    }, JWT_SECRET),
                });
            } else {
                reject(new HandledError(ErrorType.VALIDATION, 'Invalid client ID or secret.'));
            }
        } catch (err) {
            reject(err);
        }
    });


};

// =================================================

module.exports = service;