
const path = require('node:path')
const fastify = require('fastify')({
    logger: true,
})


// fastify.register(require('@fastify/cors'),{
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE']
// });

// fastify.register(require('@fastify/etag'))

const __start__ = async ()=>{
    try{
        await fastify.register(require("@fastify/autoload"),{
            dir: path.join(__dirname, 'plugins')
        });

        await fastify.register(require('./routes'), {
            prefix: '/api/v1',
        });

        await fastify.listen({ 
            port: 4000, 
            host: '0.0.0.0' 
        });
    }catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
}

__start__()




// (async()=>{
//     try{
//         await fastify.register(require("@fastify/autoload"),{
//             dir: path.join(__dirname, 'plugins')
//         })
//         await fastify.register(require('./routes'), {
//             prefix: '/api/v1',
//         })
//         await fastify.listen({ 
//             port: 4000, 
//             host: '0.0.0.0' 
//         })
//     }catch(err){
//         fastify.log.error(err)
//         process.exit(1)
//     }
// })();
