
module.exports = async (fastify, options)=>{
    const userCollection = fastify.mongo.db.collection("user")
    fastify.route({
        url: "/",
        method: "GET",
        handler: async (request, reply)=>{
            const data = await userCollection.find().toArray()
            reply.code(200).send(data)
        }
    })
}