'use strict';

const vc = require("../../utils/promise");

module.exports = async (fastify, options)=>{
    const userCollection = fastify.mongo.db.collection("user");
    
    fastify.route({
        url: "/",
        method: "GET",
        handler: async (request, reply)=>{

            const [ err, data ] = await vc(await userCollection.find().toArray());
            if(err) return reply.code(500).send(err)
            return reply.code(200).send(data);
        }
    });

    fastify.route({
        url: '/deleteAll',
        method: 'DELETE',
        handler: async (request, reply)=>{
            const [ err, data ] = await vc(await userCollection.deleteMany())
            if (err) return reply.code(500).send(err);
            return reply.code(200).send(data);
        }
    })
}