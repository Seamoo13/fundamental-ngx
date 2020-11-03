const sauceConnectLauncher = require('sauce-connect-launcher');


sauceConnectLauncher({
    username: 'adler13',
    accessKey: 'a27f2b44-8f48-4128-a9c6-bd7d28394ad6',
    x: 'https://eu-central-1.saucelabs.com/rest/v1'

}, function (err, sauceConnectProcess) {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Sauce Connect ready');
});
