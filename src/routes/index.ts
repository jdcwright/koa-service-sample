import Koa from 'koa';
import status from './status';
import validationTest from './validationTest';

export default (app: Koa) => {
    app.use(status.routes());
    app.use(validationTest.routes());
};
