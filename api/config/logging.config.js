/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import winston from 'winston';

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        try {
            app.logger = winston.createLogger({
                level: 'info',
                format: winston.format.json(),
                defaultMeta: {
                    service: 'user-service'
                },
                transports: [
                    new winston.transports.Console(),
                    new winston.transports.File({
                        filename: './logs/zeroslope.errors.log',
                        level: 'error'
                    }),
                    new winston.transports.File({
                        filename: './logs/zeroslope.log'
                    }),
                ],
            });

            resolve(app);
        } catch (err) {
            reject(err);
        }
    });
};