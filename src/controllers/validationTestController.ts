import Koa from 'koa';

export const validRequest = async (ctx: Koa.Context) => {
    ctx.status = 200;
    ctx.body = {
        valid: true
    };
};
