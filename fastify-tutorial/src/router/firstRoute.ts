import { FastifyInstance } from 'fastify';

export default async function firstRoute(fastify: FastifyInstance, options: Object) {

    fastify.addHook('onRequest', (req, reply, done) => {
        req.log.info('특정 라우터에만 필터 거치기');
        done();
    })

    fastify.get('/', async (req, reply) => {
        reply.send({hello: 'router'});
    })
}