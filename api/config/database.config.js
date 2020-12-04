import mongo from '../utilities/mongodb.utility';

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        try {
            mongo.connect({
                host: process.env.MONGODB_HOST,
                database: process.env.MONGODB_DATABASE,
            });

            resolve(app);
        } catch (err) {
            reject(err);
        }
    });

};