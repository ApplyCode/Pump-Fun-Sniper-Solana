const https = require('https');

const url = 'https://dallas.testnet.block-engine.jito.wtf';

https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received.
    resp.on('end', () => {
        console.log('Response:', data);
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});
