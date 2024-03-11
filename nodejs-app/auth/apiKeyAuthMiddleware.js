// nodejs-app/auth/apiKeyAuthMiddleware.js

const { apiKeys } = require('./config');

const authenticateApiKey = (req, res, next) => {
    const providedApiKey = req.headers['x-api-key'];

    if (!providedApiKey || !apiKeys.includes(providedApiKey)) {
        return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
    }

    next();
};

module.exports = { authenticateApiKey };
