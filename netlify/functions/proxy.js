const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const site = event.queryStringParameters.site;
    const response = await fetch(site);
    const body = await response.text();

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html'
        },
        body: body
    };
};
