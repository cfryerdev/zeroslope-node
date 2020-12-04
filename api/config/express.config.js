/* eslint-disable no-unused-expressions */
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        try {
            app.set('trust proxy', 1);

            app.use(bodyParser.urlencoded({
                extended: false
            }));
            app.use(bodyParser.json());

            app.use('/*', cookieParser());

            app.use(morgan((tokens, req, res) => {
                `${tokens.method(req, res)} ${tokens.status(req, res)} - ${tokens.url(req, res)} - ${tokens['response-time'](req, res)}ms`;
            }));

            resolve(app);
        } catch (err) {
            reject(err);
        }
    });
};