// nodejs-app/auth/config.js

require('dotenv').config();

const apiKeys = [
    process.env.API_KEY,
    // Add more API keys as needed
];

module.exports = { apiKeys };
