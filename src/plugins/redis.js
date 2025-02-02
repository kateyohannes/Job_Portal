'use strict';
const fp = require('fastify-plugin')

const redis = async (fastify, options)=>{
    fastify.register(require('@fastify/redis'), {
        url: 'redis://127.0.0.1'
    })
}

// module.exports = fp(redis)