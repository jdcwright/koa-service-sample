// Core
import Koa from 'koa';
import body from 'koa-bodyparser';

import logger from './lib/logger';
import { PORT } from './config';

const app: Koa = new Koa();
app.use(body());

app.listen(PORT);
logger.info(`Started listening on port:${PORT}`);
