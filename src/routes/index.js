'use strict';

module.exports = async (fastify, options)=>{
    fastify.register(require('./company'),{
        prefix: '/company'
    });

    fastify.register(require('./user'), {
        prefix: '/user'
    });
    fastify.register(require('./subscription'),{
        prefix: '/subscription'
    })
}