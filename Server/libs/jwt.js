const jwt = require('jsonwebtoken');
const config = require('../config/configs');

function generateToken(payload) {
    const token = jwt.sign({id: payload.id, email: payload.email}, config.JWT_SECRET, {expiresIn: '1h'});
    return {
        token
    };
}

function validateToken(token) {
    try {
        return jwt.verify(token, config.JWT_SECRET);
    } catch (err) {
        return null;
    }
}

function decodeToken(token) {
    return jwt.decode(token);
}

module.exports = {
    generateToken, validateToken, decodeToken
};