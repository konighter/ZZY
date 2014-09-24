module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        vendor : grunt.file.readJSON('public/bower.json'),
//        concat: {
//            options: {
//                separator: ';'
//            },
//            dist: {
//                src: ['<%= pkg.jspath %>/*.js' , '<%= pkg.jslib %>/**/*.js' ,'!<%= pkg.jspath %>/*.min.js'],
//                dest: '<%= pkg.jspath %>/<%= pkg.name %>.js'
//            }
//        },
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
        clean: ["<%= pkg.jspath %>/<%= pkg.name %>.js","<%= pkg.jspath %>/<%= pkg.name %>.min.js"],
        copy : {
            bootstrap:{
                expand: true,
                cwd: '<%= pkg.jslib %>/bootstrap/dist/',
                src: ['css/*.min.css','fonts/*','js/*.min.js'] ,
                dest: '<%= pkg.jsvendor %>/bootstrap/',
                filter: 'isFile'
            },
            jquery:{
                expand: true,
                cwd: '<%= pkg.jslib %>/jquery/dist/',
                src: ['css/*.min.css','fonts/*','js/*.min.js,','*.min.js'] ,
                dest: '<%= pkg.jsvendor %>/jquery/',
                filter: 'isFile'
            }
        },
//        watch: {
//            files: ['<%= concat.dist.src %>'],
//            tasks: ['default']
//        },
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
//    grunt.loadNpmTasks('grunt-contrib-jshint');
//    grunt.loadNpmTasks('grunt-contrib-qunit');
//    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', [ 'clean', 'uglify']);


};