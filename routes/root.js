
module.exports = function(fastify, options){
    fastify.route({
        url: "/",
        method: "GET",
        handler: async (request, reply)=>{
            try{
                reply.code(200).send({
                    message: "Hello Everyone!"
                })
            }catch(err){
                reply.code(500).send(err)
            }
        }
    })
}