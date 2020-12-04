import mongoose from 'mongoose';

const utility = {};

const mongoConfig = {
    useNewUrlParser: true
};

// ==================================================

utility.connect = (options) => {
    mongoose.connect(`mongodb://${options.host}/${options.database}`, mongoConfig)
        .then(() => { })
        .catch(err => {
            console.error('>> ERROR: Database connection error: '.red, err.message.red);
        });
};

utility.isIdValid = (id) => mongoose.Types.ObjectId.isValid(id);

// ==================================================

module.exports = utility;