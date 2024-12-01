"use strict";

const { Type } = require("@sinclair/typebox");

module.exports = async function(fastify, repy){
    fastify.route({
        url: "/send_otp",
        method: "POST",
        schema: {
            tags: ["User"],
            body: Type.Object({
                code: Type.String({
                    default: "+251"
                }),
                number: Type.String()
            }),
            response: Type.Any()
        },
        handler: async (request, reply)=>{
            try{
                const body = request.body;

                reply.code(200).send({
                    message: "otp: 1234",
                    body
                })
            }catch(err){
                reply.code(500).send(err)
            }
        }
    });

    fastify.route({
        url: "/verify_otp",
        method: "POST",
        schema: {
            tags: ["User"],
            body: Type.Object({
                input: Type.Object({
                    firstname: Type.String(),
                    middlename: Type.String(),
                    lastname: Type.String(),
                    code: Type.String({
                        default: "+251"
                    }),
                    number: Type.String()
                }),
                otp: Type.String()
            }),
            response: Type.Any()
        },
        handler: async (request, reply)=>{
            try{
                const { otp, input } = request.body
                let is_verfied = false;

                if(otp == 1234){
                    is_verfied = true;
                }
                if(is_verfied){
                    const { UserModel } = fastify.db.models;
                    const final = {
                        profile: {
                            fullname: {
                                firstname: input.firstname,
                                middlename: input.middlename,
                                lastname: input.lastname,
                            },
                            tel: {
                                code: input.code,
                                number: input.number,
                                is_verfied: true
                            }
                        }
                    }
                    await UserModel.create(final);
                    return reply.code(200).send({
                        message: "verfied",
                        final
                    })
                }

                return reply.code(401).send({
                    message: "wrong OTP"
                })
            }catch(err){
                reply.code(500).send(err)
            }
        }
    });

    
}