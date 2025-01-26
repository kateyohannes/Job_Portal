'use strict';

const fp = require("fastify-plugin")

const wrapper = async (fastify, options)=>{
    fastify.decorate('try', require("../utils/promise"))
}

const foo = async (fastify, options)=>{
    fastify.decorate('foo', (str)=>{
        return str
    });
}

module.exports = fp(wrapper);
module.exports = fp(foo);
