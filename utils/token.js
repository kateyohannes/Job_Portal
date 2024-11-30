
function generateToken(fastify, data) {
    const token = fastify.jwt.sign(data, fastify.config.JWT_SECRET, {
        expiresIn: 60 * 60,
    });
    return token;
}

function verifyToken(token) {
    try {
        const decode = jwt.verify(token, fastify.config.JWT_SECRET);
        return decode;
    } catch (err) {
        return err;
    }
}

function decodeToken(token) {
    try {
        let decode,
            err = jwt.decode(token.split(' ')[1]);
        if (err) {
            return err;
        }
        return decode;
    } catch (err) {
        return err;
    }
}

module.exports = {
    generateToken,
    verifyToken,
    decodeToken
}