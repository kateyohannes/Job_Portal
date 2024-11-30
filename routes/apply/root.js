"use strict"

const { Type } = require("@sinclair/typebox")

module.exports = async function(fastify, options){
    fastify.route({
        url: "",
        method: "GET",
        schema: {
            tags: ["Apply"],
            response: {
                200: Type.Array(
                    Type.Object({
                        _id: Type.String(),
                        applicant: Type.String(),
                        vacancy: Type.String(),
                        cover_letter: Type.String(),
                        protfolio: Type.Array(Type.String()),
                        is_viewed: Type.Boolean(),
                        short_listed: Type.Boolean(),
                        is_rejected: Type.Boolean()
                    })
                ) || Type.Array()
            }
        },
        handler: async (reques, reply)=> {
            try{
                const { ApplyModel } = fastify.db.models;
                const data = await ApplyModel.find();
                reply.code(200).send(data);
            }catch(err){
                reply.code(500).send(err)
            }
        }
    });
    
    fastify.route({
        url: "/:id",
        method: "GET",
        schema: {
            tags: ["Apply"],
            params: Type.Object({
                id: Type.String()
            }),
            response:{
                200: Type.Object({
                    _id: Type.String(),
                    applicant: Type.String(),
                    vacancy: Type.String(),
                    cover_letter: Type.String(),
                    protfolio: Type.Array(Type.String()),
                    is_viewed: Type.Boolean(),
                    short_listed: Type.Boolean(),
                    is_rejected: Type.Boolean()
                })
            }
        },
        handler: async (reques, reply)=> {
            try{
                const { id } = reques.params;
                const { ApplyModel } = fastify.db.models;
                const data = await ApplyModel.findByIdAndUpdate(id,{
                    is_viewed: true
                });

                reply.code(200).send(data);
            }catch(err){
                reply.code(500).send(err)
            }
        }
    }); 

    fastify.route({
        url: "/:id",
        method: "POST",
        schema: {
            tags: ["Apply"],
            params: Type.Object({
                id: Type.String()
            }),
            body: Type.Object({
                applicant: Type.String(),
                cover_letter: Type.String(),
                protfolio: Type.Array(Type.String()),
                is_viewed: Type.Boolean({ default: false }),
                short_listed: Type.Boolean({ default: false }),
                is_rejected: Type.Boolean({ default: false })
            }),
            response: {
                200: Type.Object({
                    message: Type.String()
                })
            }
        },
        handler: async (request, reply)=>{
            try{
                const body = request.body;
                const { id } = request.params;
                const { ApplyModel } = fastify.db.models;
                await ApplyModel.create({
                    ...body,
                    vacancy: id
                });
                reply.code(200).send({
                    message: "Apply Succesfully!"
                });

            } catch(err){
                reply.code(500).send(err)
            }
        }
    });

    fastify.route({
        url: "/:id/short_listed",
        method: "PUT",
        schema: {
            tags: ["Apply"],
            params: Type.Object({
                id: Type.String()
            }),
            response:{
                200: Type.Object({
                    _id: Type.String(),
                    applicant: Type.String(),
                    vacancy: Type.String(),
                    cover_letter: Type.String(),
                    protfolio: Type.Array(Type.String()),
                    is_viewed: Type.Boolean(),
                    short_listed: Type.Boolean(),
                    is_rejected: Type.Boolean()
                })
            }
        },
        handler: async (reques, reply)=> {
            try{
                const { id } = reques.params;
                const { ApplyModel } = fastify.db.models;
                const data = await ApplyModel.findByIdAndUpdate(id,{
                    short_listed: true
                });

                reply.code(200).send(data);
            }catch(err){
                reply.code(500).send(err)
            }
        }
    }); 

    fastify.route({
        url: "/:id/rejected",
        method: "PUT",
        schema: {
            tags: ["Apply"],
            params: Type.Object({
                id: Type.String()
            }),
            response:{
                200: Type.Object({
                    _id: Type.String(),
                    applicant: Type.String(),
                    vacancy: Type.String(),
                    cover_letter: Type.String(),
                    protfolio: Type.Array(Type.String()),
                    is_viewed: Type.Boolean(),
                    short_listed: Type.Boolean(),
                    is_rejected: Type.Boolean()
                })
            }
        },
        handler: async (reques, reply)=> {
            try{
                const { id } = reques.params;
                const { ApplyModel } = fastify.db.models;
                const data = await ApplyModel.findByIdAndUpdate(id,{
                    is_rejected: true
                });

                reply.code(200).send(data);
            }catch(err){
                reply.code(500).send(err)
            }
        }
    }); 

}