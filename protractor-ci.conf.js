// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
require('dotenv').config();
const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 11000,
    sauceUser: 'shonmyr13', // 'bot-ui-framework',
    sauceKey: 'd87b0a25-8b64-4b0d-832c-7345756ca44e', // '9d93fb24-322c-43db-b897-4ac680740968',
    sauceRegion: 'eu',
    specs: [
        './e2e/**/*.e2e-spec.ts'
    ],

    multiCapabilities: [
        {
            browserName: 'internet explorer',
            version: 'latest',
            platform: 'Windows 10',
            name: 'e2e-win-internet-explorer',
            screenResolution: '1920x1080',
            RequireWindowFocus: 'True'  // might fix mouseMove for IE11
        },
        {
            browserName: 'MicrosoftEdge',
            version: 'latest',
            platform: 'Windows 10',
            name: 'e2e-win-edge',
            screenResolution: '1920x1080',
        },
        {
            browserName: 'chrome',
            version: 'latest',
            platform: 'Windows 10',
            name: 'e2e-win-chrome',
            screenResolution: '1920x1080',
        },
        {
            browserName: 'firefox',
            version: 'latest',
            platform: 'Windows 10',
            name: 'e2e-win-firefox',
            screenResolution: '1920x1080',
            'sauce:options': {
                '-enablePassThrough': 'true'
            }
        },
         {
            browserName: 'chrome',
            platform: 'MAC',
            version: 'latest',
            name: 'e2e-MAC-chrome',
            screenResolution: '1920x1440',
        },
        {
            browserName: 'firefox',
            platform: 'MAC',
            version: 'latest',
            name: 'e2e-MAC-firefox',
            screenResolution: '1920x1440',
        },
        {
            browserName: 'MicrosoftEdge',
            platform: 'MAC',
            version: 'latest',
            name: 'e2e-MAC-Edge',
            screenResolution: '1920x1440',
        },
        {
            browserName: 'safari',
            platform: 'MAC',
            version: 'latest',
            name: 'e2e-MAC-safari',
            screenResolution: '1920x1440',
        },
    ],
    baseUrl: 'http://sean.local:4200/fundamental-ngx#',
    //baseUrl: 'http://localhost:4200/#',
    // baseUrl: 'https://fundamental-ngx.netlify.app/#/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    },


    onPrepare: async () => {
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: 'none' } }));
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
        // Set some config data
        const processedConfig = await browser.getProcessedConfig();

        // Resize the screens if it is a VM
        if (!('platformName' in processedConfig.capabilities)) {
            await browser.driver.manage().window().maximize();//.setSize(1366, 768);
        }

        if (processedConfig.sauceUser && processedConfig.sauceKey) {
            jasmine.getEnv().addReporter({
                suiteStarted: async (result) => {
                    await browser.executeScript('sauce:job-name=' + result.fullName);
                },
                specStarted: async (result) => {
                    await browser.executeScript('sauce:context=' + result.fullName);
                },
                specDone: async (result) => {
                    // If there are errors please update the error to Sauce Labs
                    if (result.failedExpectations.length > 0) {
                        const promisses = result.failedExpectations.map(async error => {
                            const errorUpdate = await browser.executeScript('sauce:context=' + error.stack);

                            return errorUpdate;
                        });

                        await Promise.all(promisses);
                    }
                },
            });
        }
    }
};
