"use strict";

const { Type } = require("@sinclair/typebox")

module.exports = async function(fastify, options){
    fastify.route({
        url: "",
        method: "GET",
        schema: {
            tage: ["User"],
            response: {
                200: Type.Any()
            }
        },
        handler: async (request, reply)=>{
            try{
                const { UserModel } = fastify.db.models;
                const data = await UserModel.find()
                reply.code(200).send(data);
                
            }catch(err){
                reply.code(500).send(err);
            }
        }
    });
    fastify.route({
        url: "/:id",
        method: "GET",
        schema: {
            tage: ["User"],
            response: {
                200: Type.Any()
            }
        },
        handler: async (request, reply)=>{
            try{
                const { id } = request.params
                const { UserModel } = fastify.db.models;
                const data = await UserModel.findById(id)
                reply.code(200).send(data);
                
            }catch(err){
                reply.code(500).send(err);
            }
        }
    })
}