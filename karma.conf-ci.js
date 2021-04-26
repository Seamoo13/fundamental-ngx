// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
require('dotenv').config();

module.exports = function (config) {

    const customLaunchers = {
         ChromeHeadlessNoSandbox:{
            browser:"Chrome",
            flags:[
                "--no-sandbox",
                // required to run without privileges in Docker
                "--disable-web-security",
                "--disable-gpu",
                "--remote-debugging-port=9222"
            ]
        }
    };

    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('karma-sauce-launcher'),
            require('karma-spec-reporter')
        ],
        client: {
            // leave Jasmine Spec Runner output visible in browser
            clearContext: false,
            jasmine: {
                timeoutInterval: 120000
            }
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, '../../coverage'),
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        reporters: ['spec', 'dots', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DISABLE,
        autoWatch: false,
        // browserDisconnectTimeout: 60000, // default 2000
        // browserDisconnectTolerance: 2, // default 0
        // browserNoActivityTimeout: 4 * 60 * 1000, //default 10000
        // captureTimeout: 4 * 60 * 1000, //default 60000
        customLaunchers: customLaunchers,
        browsers: Object.keys(customLaunchers),
        // browsers: "chrome",
        singleRun: true,
        retryLimit: 3 // default 2
    });
};
