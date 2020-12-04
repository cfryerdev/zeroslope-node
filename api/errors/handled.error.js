const ErrorType = {
    VALIDATION: 400,
    SECURITY: 401,
    PERMISSION: 403,
    SERVICE: 500,
};

class HandledError extends Error {
    constructor(errorType, message, ...errs) {
        super(message);

        this.errorType = errorType;
        this.errs = errs || [];
    }
};

module.exports = { ErrorType, HandledError };
