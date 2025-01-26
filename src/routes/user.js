'use strict';

const vc = require("../utils/promise");

module.exports = async (fastify, options)=>{
    const userCollection = fastify.mongo.db.collection("user")
    fastify.route({
        url: "/",
        method: "GET",
        handler: async (request, reply)=>{

            // const [ err, data ] = await fastify.try(await userCollection.find().toArray());
            const [ err, data ] = await vc(await userCollection.find().toArray());
            if(err) return reply.code(500).send(err)
            reply.code(200).send(data)
        }
    });

    fastify.route({
        url: "/setProfile",
        method: "PUT",
        // schema: {
        //     body: {
        //         type: 'object',
        //         properties: {
        //             fullname: {
        //                 firstname: { type: 'string' },
        //                 middlename: { type: 'string' },
        //                 lastname: { type: 'string' }                      
        //             },
        //             gender: { 
        //                 type: 'string', 
        //                 enum: ['male', 'female']
        //             },
        //             bod: { type: 'string' },
        //         }
        //     }
        // },
        handler: async (request, reply)=>{
        }
    })
}