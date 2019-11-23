import Koa from 'koa';
import status from './status';
import validationTest from './validationTest';
import cacheTest from './cacheTest';

export default (app: Koa) => {
    app.use(status.routes());
    app.use(validationTest.routes());
    app.use(cacheTest.routes());
};
