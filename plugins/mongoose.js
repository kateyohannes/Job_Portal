'use strict'

const fp = require("fastify-plugin");
const mongoose = require("mongoose");
const { 
    UserModel,
    VacancyModel,
    ApplyModel
} = require("../models")

const models = {  
    UserModel,
    VacancyModel,
    ApplyModel
};

module.exports = fp(async function (fastify, options) {
    try {
        mongoose.connection.on('connected', () => {
            fastify.log.info({
                actor: 'MongoDb'
            },
                'connected'
            )
        });

        mongoose.connection.on('open', () => {
            fastify.log.info({
                actor: 'MongoDb'
            },
                'open'
            )
        });

        mongoose.connection.on('disconnected', () => {
            fastify.log.error({
                actor: 'MongoDb'
            },
                'disconnected'
            )
        });

        mongoose.connection.on('reconnected', () => {
            fastify.log.info({
                actor: 'MongoDb'
            },
                'reconnected'
            )
        });

        mongoose.connection.on('disconnecting', () => {
            fastify.log.info({
                actor: 'MongoDb'
            },
                'disconnecting'
            )
        });

        mongoose.connection.on('close', () => {
            fastify.log.info({
                actor: 'MongoDb'
            },
                'close'
            )
        });
        
        await mongoose.connect(options.uri);

        fastify.decorate("db", { models });
    } catch (err) {
        fastify.log.error({ actor: 'MongodB' }, err);
    }
});

