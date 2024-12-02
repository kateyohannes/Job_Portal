"use strict";

const { Type } = require("@sinclair/typebox");

module.exports = async function(fastify, repy){
    fastify.route({
        url: "/send_otp",
        method: "POST",
        schema: {
            tags: ["UserRegister"],
            body: Type.Object({
                number: Type.String()
            }),
            response: Type.Any()
        },
        handler: async (request, reply)=>{
            try{
                const body = request.body;
                const valid_otp = Math.floor(Math.random()*100000+1)
                await fastify.redis.set(body.number, valid_otp)
                reply.code(200).send({
                    message: valid_otp,
                    body
                })
            }catch(err){
                reply.code(500).send(err)
            }
        }
    });
    
    fastify.route({
        url: "/resend_otp/:number",
        method: "POST",
        schema: {
            tags: ["UserRegister"],
            params: Type.Object({
                number: Type.String()
            }),
            response: Type.Any()
        },
        handler: async (request, reply)=>{
            try{
                const params = request.params;
                const valid_otp = Math.floor(Math.random()*100000+1)
                await fastify.redis.set(params.number, valid_otp)
                reply.code(200).send({
                    message: valid_otp,
                    params
                })
            }catch(err){
                reply.code(500).send(err)
            }
        }
    });

    fastify.route({
        url: "/verify_otp/:number",
        method: "POST",
        schema: {
            tags: ["UserRegister"],
            params: Type.Object({
                number: Type.String()
            }),
            body: Type.Object({
                otp: Type.String()
            }),
            response: Type.Any()
        },
        handler: async (request, reply)=>{
            try{
                const params = request.params
                const { otp } = request.body
                if(!params.number){
                    return res.status(404).send({
                        message: "Parameter Required!"
                    })
                }

                const valid_otp = await fastify.redis.get(params.number)
                let is_verfied = false;

                if(valid_otp == otp){
                    is_verfied = true;
                }
                if(is_verfied){
                    const { UserModel } = fastify.db.models;
                    const final = {
                        tel: [{
                            number: params.number,
                            is_verfied: true,
                            is_primary: true
                        }]
                    }

                    const user = await UserModel.findOne({
                        "tel.number": params.number
                    })
                    
                    if(user){
                        return reply.status(409).send({
                            message: "User already existed",
                            user
                        })
                    }
                    
                    const registered = await UserModel.create(final);
                    const token = fastify.jwt.sign({
                        registered
                    })
                    
                    return reply.code(200).send({
                        message: "verfied",
                        final,
                        valid_otp,
                        token
                    })
                }

                return reply.code(401).send({
                    message: "wrong OTP",
                    valid_otp
                })
            }catch(err){
                reply.code(500).send(err)
            }
        }
    });

    
}