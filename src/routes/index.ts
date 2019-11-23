import Koa from 'koa';
import status from './status';

export default (app: Koa) => {
    app.use(status.routes());
};
