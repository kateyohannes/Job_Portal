'use strict'

const fp = require("fastify-plugin")

module.exports = fp(async (fastify, options)=>{
    fastify.register(require("@fastify/jwt"),{
        secret : fastify.config.JWT_SECRET
    });    
})