// utils/auth0Logs.js

const { ManagementClient } = require('auth0');

const auth0 = new ManagementClient({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_MANAGEMENT_API_CLIENT_ID,
    clientSecret: process.env.AUTH0_MANAGEMENT_API_CLIENT_SECRET,
});

const getAuth0Logs = async () => {
    try {
        const logs = await auth0.getLogs();
        return logs;
    } catch (error) {
        console.error('Fout bij het ophalen van Auth0-logs:', error);
        throw error;
    }
};

module.exports = { getAuth0Logs };
