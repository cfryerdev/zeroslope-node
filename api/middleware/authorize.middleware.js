/* eslint-disable no-unused-vars */
import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();

const invalidTokenError = {
    errors: [{
        message: 'You do not have permission to access this.'
    }, ],
};

app.use((req, res, next) => {
    //   if (req.hasOwnProperty('headers') && req.headers.hasOwnProperty('authorization')) {
    //     try {
    //       // Validate the token
    //       jwt.verify(req.headers['authorization'], JWT_SECRET);
    //       // Renew the token
    //       var jetToken = jwt.decode(req.headers['authorization'], { secret: JWT_SECRET });
    //     } catch (err) {
    //       return res.status(400).send(invalidTokenError);
    //     }
    //   }
    next();
});

module.exports = app;