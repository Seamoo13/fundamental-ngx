const sauceConnectLauncher = require('sauce-connect-launcher');


sauceConnectLauncher({
    username: 'shon13',
    accessKey: '28a4ebcc-8cc5-4a08-817c-093c0b52130e',
    x: 'https://eu-central-1.saucelabs.com/rest/v1'

}, function (err, sauceConnectProcess) {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Sauce Connect ready');
});
