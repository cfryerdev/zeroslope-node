import _service from '../services/sample.service';

const router = require('express').Router();

/**
 * @swagger
 * definitions:
 *   SampleResponse:
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       description:
 *         type: string
 *   SampleRequest:
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 */

/**
 * @swagger
 * /sample:
 *    get:
 *      tags:
 *        - Sample
 *      summary: Gets a list of sample models
 *      description: Returns a list of sample models
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: An array of sample models
 *              schema:
 *                $ref: '#/definitions/SampleResponse'
 */

router.get('/sample/', (req, res, next) =>
    _service
        .list()
        .then(data => res.send(data))
        .catch(next)
);


/**
 * @swagger
 * /sample/{id}:
 *    get:
 *      tags:
 *        - Sample
 *      summary: Reads a single sample model by id
 *      description: Returns a single of sample model
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            description: Sample model's id
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: An single sample model
 *              schema:
 *                $ref: '#/definitions/SampleResponse'
 */

router.get('/sample/:id', (req, res, next) =>
    _service
        .read(req.params.id)
        .then(data => res.send(data))
        .catch(next)
);

/**
 * @swagger
 * /sample:
 *    post:
 *      tags:
 *        - Sample
 *      summary: Creates and stores a sample model
 *      description: Returns a list of sample models
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: Model
 *            description: Sample object
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/SampleRequest'
 *      responses:
 *          200:
 *              description: Successfully created
 */

router.post('/sample/', (req, res, next) =>
    _service
        .create(req.body)
        .then(data => res.send(data))
        .catch(next)
);

/**
 * @swagger
 * /sample/{id}:
 *    put:
 *      tags:
 *        - Sample
 *      summary: Updates and stores a sample model
 *      description: Updates and stores a sample model
 *      produces: application/json
 *      parameters:
 *          - name: id
 *            description: Sample model's id
 *            in: path
 *            required: true
 *            type: string
 *          - name: Model
 *            in: body
 *            description: Fields for the Sample resource
 *            schema:
 *              type: array
 *              $ref: '#/definitions/SampleRequest'
 *      responses:
 *          200:
 *              description: Successfully updated
 */

router.put('/sample/:id', (req, res, next) =>
    _service
        .update(req.params.id, req.body)
        .then(data => res.send(data))
        .catch(next)
);

/**
 * @swagger
 * /sample/{id}:
 *    delete:
 *      tags:
 *        - Sample
 *      summary: Deletes a sample mode by id
 *      description: Deletes a single sample by id
 *      produces:
 *          - application/json
 *      parameters:
 *       - name: id
 *         description: Samples's id
 *         in: path
 *         required: true
 *         type: string
 *      responses:
 *          200:
 *              description: Successfully deleted
 */

router.delete('/sample/:id', (req, res, next) =>
    _service
        .delete(req.params.id)
        .then(data => res.send(data))
        .catch(next)
);

/**
 * @swagger
 * tags:
 *   - name: Sample
 *     description: Sample endpoint with full crud
 */

module.exports = router;