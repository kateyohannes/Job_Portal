
'use strict';

const vc = require("../../../utils/promise");

module.exports = async (fastify, options)=>{
    const userCollection = fastify.mongo.db.collection("user");
    
    fastify.route({
        url: "/",
        method: "GET",
        handler: async (request, reply)=>{

        }
    });

    fastify.route({
        url: "/add",
        method: "PUT",
        schema: {
            body: {
                type: 'object',
                properties: {
                    organization_name: { type: 'string' },
                    timeline: {
                        from: { type: 'string' },
                        to: { type: 'string' }
                    },
                    position: { type: 'string' },
                    reason_for_leaving: { type: 'string' },
                    document_obtained: { type: 'string' },
                },
            },
            response: {
                201: {

                },
                415: {

                },
                500: {

                }
            }
        },
        handler: async(request, reply)=>{

        }
    });

    fastify.route({
        url: "/remove/:id",
        method: "PUT",
        schema: {
            params: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                },
                required: [ 'id' ]
            },
            response: {
                200: {

                },
                415: {

                },
                500: {

                }
            }
        },
        handler: async(request, reply)=>{

        }
    });
}