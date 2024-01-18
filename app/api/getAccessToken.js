// getAccessToken.js
const axios = require('axios');

const getAccessToken = async () => {
    try {

        // console.log('Calling getAccessToken function...');

        const response = await axios.post('https://dev-8cugti5tra1isdds.us.auth0.com/oauth/token', {
            client_id: 'PsXaBnRdPly7lbLjpiT1dwbNBG1u65MV',
            client_secret: 'UdsRWCP7oAK03xAR-Ts27uwmQjGe9FVb7x_RFCN4ECGUyG4983zXExR5lnynKGpM',
            audience: 'https://dev-8cugti5tra1isdds.us.auth0.com/api/v2/',
            grant_type: 'client_credentials',
        });

        // console.log('New access token:', response.data.access_token);

        return response.data.access_token;
    } catch (error) {
        throw error;
    }
};

const refreshAccessToken = async (refreshToken) => {

    // console.log('Calling refreshAccessToken function...');

    const options = {
        method: 'POST',
        url: 'https://dev-8cugti5tra1isdds.us.auth0.com/oauth/token',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: new URLSearchParams({
            grant_type: 'refresh_token',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            refresh_token: refreshToken,
        }),
    };

    try {
        const response = await axios(options);

        // console.log('Newly refreshed access token:', response.data.access_token);

        return response.data.access_token;
    } catch (error) {
        throw new Error(`Failed to refresh access token: ${error.message}`);
    }
};

module.exports = { getAccessToken, refreshAccessToken };
