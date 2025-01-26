'use strict';

const vc = require("../utils/promise")

module.exports = async (fastify, options)=>{
    const subscriptionCollection = fastify.mongo.db.collection('subscription');

    fastify.route({
        url: "/",
        method: "GET",
        handler: async (request, reply)=>{
        
            const [ err, data ] = await vc(await subscriptionCollection.find().toArray());
            // const [ err, data ] = await fastify.promise.xc(await subscriptionCollection.find().toArray());
            if (err) return reply.code(500).send(err);
            reply.code(200).send(data);
        }
    });
}