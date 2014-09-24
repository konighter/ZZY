module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['<%= pkg.jspath %>/*.js' , '<%= pkg.jslib %>/**/*.js'],
                dest: '<%= pkg.jspath %>/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            build: {
                files: {
                    '<%= pkg.jspath %>/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
      
        watch: {
            files: <%= concat.dist.src %>,
            tasks: ['default']
        },
        compass: {
            production: {
                options: {
//                    config:"config.rb",
                    basePath: "public/stylesheets",
                    sassDir: "sass",
                    cssDir: "css",
                    javascriptsDir: "js",
                    fontsDir: "fonts",
//                    httpPath: "/static",
                    imagesDir: "images",
//                    debugInfo: true,
                    trace: true,
//                    clean: true,
                    watch: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.registerTask('test', [ 'qunit']);

    grunt.registerTask('default', [ 'concat', 'uglify']);

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

};