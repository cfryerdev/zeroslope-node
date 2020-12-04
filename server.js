/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
import express from 'express';

require('colors');

const app = express();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const port = process.env.PORT;

// ==================================================

require('./api/config/express.config')(app)
    .then(require('./api/config/swagger.config'))
    .then(require('./api/config/logging.config'))
    .then(require('./api/config/auth.config'))
    .then(require('./api/config/session.config'))
    .then(require('./api/config/controllers.config'))
    .then(require('./api/config/database.config'))
    .then(require('./api/config/error.config'))
    .then(() => app.listen(port, () =>
        console.log(`>> Navigate: http://localhost:${port}/`)
    ))
    .catch(err => console.error(err.stack.red));

// ==================================================
