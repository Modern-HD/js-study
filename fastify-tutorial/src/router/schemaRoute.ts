import { FastifyInstance, FastifySchema } from "fastify";

export default async function schemaRoute(fastify: FastifyInstance, options: Object) {
    const jsonSchema = {
        type: 'object',
        required: ['game'],
        properties: {
            game: { title: 'string' }
        }
    }

    const schema: FastifySchema = {
        body: jsonSchema
    }

    fastify.post('/game', { schema }, async (req, reply) => {
        return reply.send({ status: '통과' });
    })

}