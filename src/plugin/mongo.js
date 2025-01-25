
const fp = require("fastify-plugin")

const connect = async (fastify, options) => {
    fastify.register(require("@fastify/mongodb"), {
        url: "mongodb://localhost:27017/jobportal_test"
    });
}

module.exports = fp(connect)
