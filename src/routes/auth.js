'use strict'

module.exports = async (fastify, options)=>{
    fastify.route({
        url: '/',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    code: { type: 'string' },
                    number: { type: 'string' }
                },
            },
        },
        handler: async (request, reply)=>{

        }
    });

    fastify.route({
        url: '/verifyOTP',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    otp: { type: 'string' }
                },
            },
        },
        handler: async (request, reply)=>{

        }
    });
}