// Core
import Koa from 'koa';
import body from 'koa-bodyparser';

import logger from './lib/logger';
import { PORT } from './config';

import errorHandling from './middleware/errorHandling';
import routes from './routes';

const app: Koa = new Koa();
app.use(body());
app.use(errorHandling);

routes(app);

app.listen(PORT);
logger.info(`Started listening on port:${PORT}`);
