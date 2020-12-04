import session from 'express-session';

// const MongoStore = require('connect-mongo')(session);

module.exports = (app) => {
    // app.use(session({
    //     secret: config.security.secret,
    //     saveUninitialized: false,
    //     resave: false,
    //     store: new MongoStore({
    //         url: process.env.CONNECTIONSTRING,
    //         autoRemove: 'interval',
    //         autoRemoveInterval: 120 // Minutes
    //     })
    // }));

    return new Promise((resolve, reject) => {
        try {
            app.use(session({
                secret: process.env.JWT_SECRET,
                resave: false,
                saveUninitialized: true,
                cookie: {
                    secure: false
                },
            }));

            resolve(app);
        } catch (err) {
            reject(err);
        }
    });
};