
module.exports = async (fastify, options)=>{
    fastify.register(require("./user"), {
        prefix: "/user"
    });
}