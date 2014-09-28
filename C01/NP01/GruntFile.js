module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        vendor : grunt.file.readJSON('bower.json'),
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
                files: [{
                    expand: true,
                    cwd: '<%= pkg.jspath %>',
                    src: '**/*.js',
                    dest: '<%= pkg.jspath %>'
                }]
            }
        },
        clean: {
           vendor :['<%= pkg.jslib %>'],
           build: ["<%= pkg.jsvendor %>","<%= pkg.jspath %>/<%= pkg.name %>.min.js"]
        },
        copy : {
            vendor : {
                files :[
                    { expand: true, cwd: '<%= pkg.jslib %>/bootstrap/dist/', src: ['css/*.min.css','fonts/*','js/*.min.js'] , dest: '<%= pkg.jsvendor %>/bootstrap/', filter: 'isFile'},
                    { expand: true, cwd: '<%= pkg.jslib %>/jquery/dist/', src: ['css/*.min.css','fonts/*','js/*.min.js,','*.min.js'] , dest: '<%= pkg.jsvendor %>/jquery/', filter: 'isFile' },
                    { expand: true, cwd: '<%= pkg.jslib %>/headroom.js/dist/', src: ['jQuery.headroom.min.js','headroom.min.js'] , dest: '<%= pkg.jsvendor %>/headroom/', filter: 'isFile' },
                    { expand: true, cwd: '<%= pkg.jslib %>/html5shiv/dist/', src: ['html5shiv.min.js'] , dest: '<%= pkg.jsvendor %>/html5shiv/', filter: 'isFile' },
                    { expand: true, cwd: '<%= pkg.jslib %>/respond/dest/', src: ['respond.min.js'] , dest: '<%= pkg.jsvendor %>/respond/', filter: 'isFile' },
                    { expand: true, cwd: '<%= pkg.jslib %>/backbone/', src: ['backbone.js'] , dest: '<%= pkg.jsvendor %>/backbone/', filter: 'isFile' },
                    { expand: true, cwd: '<%= pkg.jslib %>/requirejs/', src: ['require.js'] , dest: '<%= pkg.jsvendor %>/requirejs/', filter: 'isFile' },
                    { expand: true, cwd: '<%= pkg.jslib %>/underscore/', src: ['underscore.min.js'] , dest: '<%= pkg.jsvendor %>/backbone/', filter: 'isFile' },
                    { expand: true, cwd: '<%= pkg.jslib %>/jqueryui/', src: ['jquery-ui.min.js'] , dest: '<%= pkg.jsvendor %>/jqueryui/', filter: 'isFile' },
                ]
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: 'public/vendor',
                    layout: 'byComponent',
                    install: true,
                    copy:false,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false
                }
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
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('copyVendor',['bower:install','copy:vendor']); // ,'clean:vendor'
    grunt.registerTask('default', ['copyVendor', 'clean:build', 'uglify']);



};



//https://github.com/backbone-boilerplate/backbone-boilerplate backbone 工程模板