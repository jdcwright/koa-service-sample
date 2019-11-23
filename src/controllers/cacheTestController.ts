import Koa from 'koa';

export const cacheTest = async (ctx: Koa.Context) => {
    await sleep(5000);

    ctx.body = 'DOPE CONTENT';
};

const sleep = (ms: number) => new Promise(resolve => {
    setTimeout(resolve, ms);
});
