import { describe, it } from 'mocha';
import assert from 'assert';
import * as httpMocks from 'node-mocks-http';
import EventEmitter from 'events';
import controller from '../../api/controllers/health.controller';

const buildResponse = () => httpMocks.createResponse({ eventEmitter: EventEmitter });

describe('Health Endpoint', () => {
    it('should succeed, return 200', done => {
        const response = buildResponse();
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/health'
        });
        response.on('end', () => {
            assert.equal(response.statusCode, 200);
            done();
        });
        controller.handle(request, response);
    });

    it('should fail, no endpoint', done => {
        const response = buildResponse();
        const request = httpMocks.createRequest({
            method: 'POST',
            url: '/health'
        });
        response.on('end', () => {
            done(new Error('Received a response when we shouldn\'t have.'));
        });
        controller.handle(request, response, () => {
            done();
        });
    });
});
