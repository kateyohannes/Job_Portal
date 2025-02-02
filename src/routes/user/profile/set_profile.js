
'use strict';

module.exports = async (fastify, options)=>{
    fastify.route({
        url: "/",
        method: "GET",
        schema: {
            response: {
                201: {
                    type: 'object',
                    properties: {
                        full_name: {
                            type: 'object',
                            properties: {
                                first_name: { type: 'string' },
                                middle_name: { type: 'string' },
                                last_name: { type: 'string' }
                            },
                        },
                        gender: { type: 'string' },
                        martial_status: { type: 'string' },
                        birth_of_date: { type: 'string' },
                        birth_of_place: { type: 'string' },
                        nationality: { type: 'string' },
                        language: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    name: { type: 'string' },
                                    level: { type: 'string' }
                                },
                            },
                        },
                        hobbies: {
                            type: 'array',
                            items: { type: 'string' }
                        }
                    },
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
        url: "/",
        method: "PUT",
        schema: {
            body: {
                type: 'object',
                properties: {
                    full_name: {
                        type: 'object',
                        properties: {
                            first_name: { type: 'string' },
                            middle_name: { type: 'string' },
                            last_name: { type: 'string' }
                        },
                    },
                    gender: { 
                        type: 'string', 
                        enum: ['MALE', 'FEMALE'] 
                    },
                    martial_status: {
                        type: 'string', 
                        enum: ['MARID', 'SINGLE', 'WIDOW', 'DIVORCED']
                    },
                    birth_of_date: { type: 'string' },
                    birth_of_place: { type: 'string' },
                    nationality: { type: 'string' },
                    language: {
                        type: 'array',
                        maxItems: 10,
                        items: {
                            type: 'object',
                            properties: {
                                name: { type: 'string' },
                                level: { type: 'string' }
                            },
                        },
                    },
                    hobbies: {
                        type: 'array',
                        maxItems: 5,
                        items: { type: 'string' }
                    }
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
    })
}