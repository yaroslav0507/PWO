var config = global.config || require('./gulp/config.js')();

module.exports = function (settings) {

    settings.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon-chai'],

        plugins: [
            'karma-chai',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-sinon-chai'
        ],

        // list of files / patterns to load in the browser
        // jQuery is needed to make angular mocks work, ionic.bundle does not provide jQuery
        files:
            ['./client/vendors/jquery/dist/jquery.min.js']
                .concat(config.paths.src.vendors.scripts)
                .concat([
            './client/vendors/angular-mocks/angular-mocks.js',
            './test.config.js',
            './client/src/app/app.js',
            './client/src/**/*.js'
        ]),

        preprocessors: {},

        ngHtml2JsPreprocessor: {
            moduleName: 'app'
        },


        // list of files to exclude
        exclude: [],


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: settings.LOG_DISABLE || settings.LOG_ERROR || settings.LOG_WARN || settings.LOG_INFO || settings.LOG_DEBUG
        logLevel: settings.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity
    })
};