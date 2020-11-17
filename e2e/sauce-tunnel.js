const sauceConnectLauncher = require('sauce-connect-launcher');


sauceConnectLauncher({
    username: 'shonmyr13',
    accessKey: 'd87b0a25-8b64-4b0d-832c-7345756ca44e',
    x: 'https://eu-central-1.saucelabs.com/rest/v1'

}, function (err, sauceConnectProcess) {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Sauce Connect ready');
});
