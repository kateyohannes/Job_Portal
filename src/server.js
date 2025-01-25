
const fastify = require('fastify')({
    logger: true,
})


// fastify.register(require('@fastify/cors'),{
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE']
// });

// fastify.register(require('@fastify/etag'))
fastify.register(require('./plugins/mongo'))
fastify.register(require('./plugins/redis'))
fastify.register(require('./routes'), {
    prefix: '/api/v1',
})

const start = async ()=>{
    try{
        await fastify.listen({ 
            port: 4000, 
            host: '0.0.0.0' 
        })
    }catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
}

start()