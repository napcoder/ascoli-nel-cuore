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
            options: {
                //node: true,
                globals: {
                    angular: true
                }
            },
            files: ['gruntfile.js', 'app.js', 'tests/client/**/*.js', 'routes/**/*.js', 'public/js/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['karma:unit']);
    grunt.registerTask('test', ['karma:unit']);
    grunt.registerTask('testSingle', ['karma:single']);
};
