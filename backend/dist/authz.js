"use strict";
exports.__esModule = true;
exports.handAuthorization = function (req, resp, next) {
    var token = extractToken(req);
    if (!token) {
        resp.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"');
        resp.status(401).json({ message: 'Você precisa se autenticar' });
    }
    else {
        jwt.verify(token, api_config_1.API_PASSWORD, function (error, decoded) {
            if (decoded) {
                next();
            }
            else {
                resp.status(403).json({ message: 'Você não está autorizado a acessar o recurso' });
            }
        });
    }
};
function extractToken(request) {
    var token = undefined;
    if (request.headers && request.headers.authorization) {
        var parts = request.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }
    return token;
}
