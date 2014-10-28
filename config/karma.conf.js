module.exports = function(config){
    config.set({
        basePath : '../',

        files : [
            'public/components/angular/angular.min.js',
            'public/components/angular-translate/angular-translate.min.js',
            'public/components/angular-mocks/angular-mocks.js',
            'public/js/**/*.js',
            'tests/client/**/*.js'
        ],

        autoWatch : true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        // CLI --log-level debug
        logLevel: config.LOG_INFO,

        frameworks: ['jasmine'],

        browsers : ['PhantomJS'],

        plugins : [
                'karma-phantomjs-launcher',
                'karma-jasmine'
                ]

    });
};
