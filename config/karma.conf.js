module.exports = function(config){
    config.set({
        basePath : '../',

        files : [
            'public/components/angular/angular.js',
            'public/components/angular-translate/angular-translate.js',
            'public/components/angular-*/angular-*.js',
            'test/lib/angular/angular-mocks.js',
            'public/js/**/*.js',
            'test/client/unit/**/*.js'
        ],

        exclude : [
            'public/components/angular-*/angular-loader.js',
            'public/components/angular-*/*.min.js',
            'public/components/angular/*.min.js',
            'public/components/angular-*/angular-scenario.js'
        ],

        autoWatch : true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        // CLI --log-level debug
        logLevel: config.LOG_INFO,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],

        plugins : [
                'karma-junit-reporter',
                'karma-chrome-launcher',
                'karma-jasmine'
                ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
