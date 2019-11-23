import Koa from 'koa';
import Joi from '@hapi/joi';
import { Models } from '../models/validate';

/**
 * Helper function to validate an object against the provided schema,
 * and to throw a custom error if object is not valid.
 *
 * @param {Object} object The object to be validated.
 * @param {String} label The label to use in the error message.
 * @param {Object} schema An object containing the Joi schema for each key found in "object".
 */
const validateObject = (object: object = {}, label: string, schema?: Joi.SchemaMap, options?: Joi.ValidationOptions) => {
    if (schema) {
        const { error } = Joi.object(schema).validate(object, options);
        if (error) {
            throw new Error(`Invalid ${label} - ${error.message}`);
        }
    }
};

/**
 * Generate a Koa middleware function to validate a request using
 * the provided validation objects.
 *
 * @param {Object} validationObj
 * @param {Object} validationObj.headers The request headers schema
 * @param {Object} validationObj.params The request params schema
 * @param {Object} validationObj.query The request query schema
 * @param {Object} validationObj.body The request body schema
 * @returns A validation middleware function.
 */
const validate = (schema: Models.Validate.validateSchema  = {}): Koa.Middleware => async (ctx: Koa.Context, next: Function) => {
    try {
        validateObject(ctx.headers, 'Headers', schema.headers, { allowUnknown: true });
        validateObject(ctx.params, 'URL Parameters', schema.params);
        validateObject(ctx.query, 'URL Query', schema.query);

        if (ctx.request.body) {
            validateObject(ctx.request.body, 'Request Body', schema.body);
        }
    }
    catch (err) {
        ctx.throw(400, err.message);
    }

    await next();
};

export default validate;
