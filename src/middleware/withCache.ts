import Koa from 'koa';
import cache from '../lib/cache';

export default (ttl: number = 5): Koa.Middleware => async (ctx: Koa.Context, next: Function) => {
    const { url } = ctx.request;

    // if we have cached data, return it
    if (cache.has(url)) {
        ctx.body = cache.get(url);
        return;
    }

    // no cached data, proceed to handler
    await next();

    // koa middleware mutates ctx, so it will now have the data from the controller for us to cache
    const { body } = ctx;

    // convert our ttl from minutes to seconds
    const ttlS = ttl * 60;
    cache.set(url, body, ttlS);
};
