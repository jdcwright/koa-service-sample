import { status } from '../statusController';

describe('Status Controller', () => {
    describe('Status', () => {
        it('sets body and status', () => {
            const ctx = {
                body: null,
                status: null
            };

            status(ctx as any);

            expect(ctx.body).toEqual('yolo');
            expect(ctx.status).toEqual(200);
        });
    });
});
