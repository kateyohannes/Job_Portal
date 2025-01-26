
'use strict'

const { ObjectId } = require("@fastify/mongodb");
const vc = require("../utils/promise")

module.exports = async (fastify, options)=>{
    const companyCollection = fastify.mongo.db.collection("company");
    fastify.route({
        url: "/",
        method: "GET",
        handler:  async (request, reply)=>{
            const [ err, data ] = await vc(await companyCollection.find({}).toArray());
            if (err) return reply.code(500).send(err)
            return reply.code(200).send(data)
        }
    });

    fastify.route({
        url: "/:id",
        method: "GET",
        handler: async (request, reply)=>{
            const { id } = request.id
            const [ err, data ] = await vc(await companyCollection.find({
                _id: new ObjectId(id)
            }));
            if (err) return reply.code(500).send(err)
            return reply.code(200).send(data)
        }
    })

    fastify.route({
        url: "/register",
        method: "POST",
        handler: async (request, reply)=>{
            const body = request.body
            
        }
    })
}