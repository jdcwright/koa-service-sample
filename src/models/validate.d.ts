import Joi from '@hapi/joi';

declare namespace Models.Validate {
    export interface validateSchema {
        headers?: Joi.SchemaMap;
        params?: Joi.SchemaMap;
        query?: Joi.SchemaMap;
        body?: Joi.SchemaMap;
    }
}
