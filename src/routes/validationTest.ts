import Router from 'koa-router';
import Joi from '@hapi/joi';

import validate from '../middleware/validate';
import { Models } from '../models/validate';

import { validRequest } from '../controllers/validationTestController';

const router = new Router();

const validationSchema: Models.Validate.validateSchema = {
    params: {
        id: Joi.number()
    },
    body: {
        name: Joi.string()
    }
};

router.get('/api/validate/:id', validate(validationSchema), validRequest);
router.post('/api/validate/:id', validate(validationSchema), validRequest);

export default router;
