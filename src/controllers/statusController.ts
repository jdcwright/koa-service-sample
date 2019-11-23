import Koa from 'koa';

export const status = async (ctx: Koa.Context) => {
    ctx.status = 200;
    ctx.body = 'yolo';
};
