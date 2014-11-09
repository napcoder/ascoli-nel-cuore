module.exports = function(config){
    config.set({
        basePath : '../',

        preprocessors: {
            'public/partials/*.html': ['ng-html2js']
        },

        files : [
            'public/components/angular/angular.min.js',
            'public/components/angular-mocks/angular-mocks.js',
            'public/components/angular-translate/angular-translate.min.js',
            'public/partials/*.html'
            'public/js/**/*.js',
            'tests/client/**/*.js',
        ],

        autoWatch : true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        // CLI --log-level debug
        logLevel: config.LOG_INFO,

        frameworks: ['mocha', 'chai'],

        browsers : ['PhantomJS'],

        plugins : [
                'karma-phantomjs-launcher',
                'karma-ng-html2js-preprocessor',
                'karma-mocha',
                'karma-chai'
                ]

    });
};
