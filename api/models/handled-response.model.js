import { ErrorType } from '../errors/handled.error';

class HandledResponse {
    constructor(message, err, includeStack) {
        this.message = message;
        this.errors = [];

        if (err) {
            this.mapErrors(err, includeStack);
        }
    }

    static map(err, includeStack) {
        const result = {
            message: err.message,
            type: err.errorType || ErrorType.SERVICE,
        };

        if (includeStack) {
            result.stack = err.stack;
        }

        return result;
    }

    mapErrors(err, includeStack) {
        this.errors.push(HandledResponse.map(err, includeStack));

        if (err.errs && err.errs.length) {
            err.errs.forEach(currentErr => this.mapErrors(currentErr, includeStack));
        }
    }
};

module.exports = HandledResponse;