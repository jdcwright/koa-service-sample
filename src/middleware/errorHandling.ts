import Koa from 'koa';
import { get } from 'lodash';
import logger from '../lib/logger';

// config
import { LOG_LEVEL } from '../config';

export default async (ctx: Koa.Context, next: Function): Promise<void> => {
    try {
        await next();
    }
    catch (error) {
        if (error.status === 401) {
            logger.warn(`Error trying to call ${ctx.request.url}`);
            logger.warn('401 Unauthorized');
            ctx.status = 401;
            ctx.body = {
                message: error.originalError ? error.originalError.message : error.message,
                status: 401
            };

            return;
        }

        if (error && error.response) {
            const { status, data } = error.response;
            logger.error(`Error trying to call ${ctx.request.url}`);
            logger.error('API Error:');
            logger.error(JSON.stringify(data));

            ctx.status = status || 503;
            ctx.body = {
                message: data,
                status: status || 503
            };
            return;
        }

        if (error) {
            const code = error.statusCode || error.status || 500;
            const message = get(error, 'message', 'Unknown error');

            if (code >= 500) {
                logger.error(`Error trying to call ${ctx.request.url}`);
                logger.error(`Caught Error: ${message}`, message);
            }
            else {
                logger.warn(`Error trying to call ${ctx.request.url}`);
                logger.warn(`Caught Error: ${message}`, message);
            }

            ctx.status = code;
            ctx.body = {
                message,
                status: code
            };
        }

        if (LOG_LEVEL === 'debug') {
            logger.error('error: ', error);
            logger.error('context: ', ctx);
        }
    }
};
