
'use strict';

const vc = require("../../../utils/promise");

module.exports = async (fastify, options)=>{
    const userCollection = fastify.mongo.db.collection("user");
    
    fastify.route({
        url: "/",
        method: "GET",
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        educational_background: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    school_name: { type: 'string' },
                                    timeline: {
                                        from: { type: 'string' },
                                        to: { type: 'string' },
                                    },
                                    field_of_study: { type: 'string' },
                                    educational_award: { type: 'string' },
                                    educational_document: { type: 'string' },
                                },
                            },
                        },   
                    },
                },
                500: {

                }
            },
        },
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
                    school_name: {
                        type: 'string'
                    },
                    timeline: {
                        from: { type: 'string' },
                        to: { type: 'string' },
                    },
                    field_of_study: { type: 'string' },
                    educational_award: {
                        type: 'string',
                        enum: [
                            'HIGH_SCHOOL', 
                            'PREPARATORY', 
                            'CERTIFICATE', 
                            'DIPLOMA', 
                            'BACHILOR_DEGREE', 
                            'MASTERS', 
                            'PHD', 
                            'OTHER'
                        ],
                    },
                    educational_document: { type: 'string' },
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