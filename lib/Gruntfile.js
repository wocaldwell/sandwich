module.exports = function(grunt){

    grunt.initConfig({
        browserify: {
            '../dist/app.js': ['../javascripts/DOMHandler.js']
        },
        jshint: {
            options: {
                predef: ["document", "console"],
                esnext: true,
                globalstrict: true,
                globals: {"$": true, "SandwichMaker": true},
                browserify: true
            },
            files: ['../javascripts/**/*.js']
        },
        // copy: { //for bootstrap and jquery - only need to do the first time.
        //   bootstrap: {
        //     expand: true,
        //     cwd: 'node_modules/bootstrap/dist',
        //     src: ['**'],
        //     dest: '../dist'
        //   },
        //   jquery: {
        //     expand: true,
        //     cwd: 'node_modules/jquery/dist',
        //     src: ['jquery.min.js'],
        //     dest: '../dist'
        //   }
        // },
        sass: {
            dist:{
                files: {
                    '../css/main.css': '../sass/styles.scss'
                }
            }
        },
        watch: {
            javascripts: {
                files: ['../javascripts/**/*.js'],
                tasks: ['jshint', 'browserify']
            },
            sass: {
                files: ['../sass/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'sass', 'browserify', /* 'copy', */ 'watch']);

};