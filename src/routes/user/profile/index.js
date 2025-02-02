
'use strict';

module.exports = async (fastify, options)=>{
    fastify.register(require("./set_profile"),{
        prefix: "/set_profile"
    });

    fastify.register(require("./education_background"),{
        prefix: "/education_background"
    });

    fastify.register(require("./work_experiance"),{
        prefix: "/work_experiance"
    });
}
