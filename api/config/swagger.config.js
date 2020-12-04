/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import express from 'express';
import path from 'path';
import fs from 'fs-extra';
import swaggerJsdoc from 'swagger-jsdoc';

module.exports = app => {
    const options = {
        swaggerDefinition: {
            info: {
                title: 'ZeroSlope',
                version: '1.0.0',
                description: 'ZeroSlope API developed in Node.'
            }
        },
        produces: ['application/json'],
        schemes: ['http', 'https'],
        apis: [
            path.resolve(__dirname, '../controllers/*.controller.js'),
            path.resolve(__dirname, '../errors/*.error.js'),
            path.resolve(__dirname, '../models/*.model.js')
        ]
    };

    const specs = swaggerJsdoc(options);

    specs.security = [
        {
            Bearer: []
        }
    ];
    specs.securityDefinitions = {
        Bearer: {
            name: 'Authorization',
            in: 'header',
            type: 'apiKey',
            description: 'Please prefix your JWT token with the word Bearer (and a space).'
        }
    };

    return fs
        .writeFile(
            path.resolve(__dirname, '../../swagger/swagger.json'),
            JSON.stringify(specs),
            'utf8'
        )
        .then(() => {
            console.info('>> Swagger Json File Generated.'.gray);
            app.use(express.static('swagger'));

            return app;
        });
};
