module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        karma: {
            unit: {
                configFile: 'config/karma.conf.js'
            },

            single: {
                configFile: 'config/karma.conf.js',
                singleRun: true
            }
        },

        jshint: {
            files: ['gruntfile.js', 'app.js', 'test/client/**/*.js', 'test/server/**/*.js', 'routes/**/*.js', 'services/**/*.js', 'public/js/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
