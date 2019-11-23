import NodeCache from 'node-cache';

const cache = new NodeCache({
    stdTTL: 60 // 1 minute default ttl
});

export default cache;
