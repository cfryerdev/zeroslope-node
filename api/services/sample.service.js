/* eslint-disable no-param-reassign */
import { ErrorType, HandledError } from '../errors/handled.error';
import mongodb from '../utilities/mongodb.utility';
import SampleModel from '../models/sample.model';

const service = {};

// ==================================================

function validateId(id) {
    return new Promise((resolve, reject) => {
        if (mongodb.isIdValid(id)) {
            resolve(id);
        } else {
            reject(new HandledError(ErrorType.VALIDATION, `The id ${id} is not valid.`));
        }
    });
};

function validateData(id, data) {
    return new Promise((resolve, reject) => {
        if (data) {
            resolve(data);
        } else {
            reject(new HandledError(ErrorType.VALIDATION, `Object with id ${id} was not found.`));
        }
    });
}

// ==================================================

service.list = () => SampleModel.find({});

service.read = (id) =>
    validateId(id)
        .then(() => SampleModel.findById(id))
        .then(data => validateData(id, data));

service.create = (model) => {
    const newModel = new SampleModel();

    newModel.name = model.name;
    newModel.description = model.description;

    return newModel.save();
};

service.update = (id, model) =>
    validateId(id)
        .then(() => SampleModel.findById(id))
        .then(data => validateData(id, data))
        .then(data => {
            data.name = model.name;
            data.description = model.description;

            return data.save();
        });

service.delete = (id) =>
    validateId(id)
        .then(() => SampleModel.findById(id))
        .then(data => validateData(id, data))
        .then(data => data.remove())
        .then(() => {
            return {};
        });

// =================================================

module.exports = service;