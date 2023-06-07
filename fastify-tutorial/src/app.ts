import Fastify from 'fastify';
import firstRoute from './router/firstRoute';
import schemaRoute from './router/schemaRoute';
import { PinoLoggerOptions, FastifyLoggerOptions } from 'fastify/types/logger';

const envToLogger: {[key: string]: boolean | PinoLoggerOptions & FastifyLoggerOptions} = {
    development: {
        transport: {
            target: 'pino-pretty',
            options: {
                ignore: 'pid,hostname'
            },
        },
    },
    production: true,
    test: false,
}

const fastify = Fastify({
    logger: envToLogger[process.env.NODE_ENV!] ?? true
});

fastify.addHook('onRequest', (req, reply, done) => {
    // 필터 기능
    req.log.info(req.url);
    return done();
})

// 라우터 등록
fastify.register(firstRoute, { prefix: '/route' });
fastify.register(schemaRoute, { prefix: '/schema' });

fastify.get('/', (req, reply) => {
    return reply.send({ hello: "world" });
})

// 에러 핸들링
fastify.addHook('onError', (req, reply, error) => {
    fastify.log.error(error);
    return reply.send({ message: '에러가 발생했습니다.' });
})

fastify.listen({ port: 8088 }, async (err, address) => {
    if (err) {
        process.exit(1);
    }
    fastify.log.info(`server is now listening on ${address}`)
}) 