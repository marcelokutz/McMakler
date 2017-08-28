module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dist: {
        files: {
          'dist/js/main.min.js': ['source/js/main.js'],
          'dist/js/app.min.js': ['source/js/app.js'],
          'dist/js/jquery-3.2.1.min.js': ['source/js/jquery-3.2.1.js']
        }
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'source/scss',
          src: ['*.scss'],
          dest: 'dist/css',
          ext: '.min.css'
        }],
        options: {
          style: 'compressed'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        map: true
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'dist/css/*.css',
        dest: 'dist/css/'
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'source/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/images/'
        }]
      }
    },
    watch: {
      options: {
        dateFormat: function(time) {
          grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
          grunt.log.writeln('Waiting for more changes...');
        },
      },
      files: ['*.html','source/js/*.js'],
      css: {
        files: 'source/scss/*.scss',
        tasks: ['sass:dist', 'autoprefixer'],
        options: {
          livereload: true,
        },
      },
      scripts: {
        files: ['source/js/*'],
        tasks: ['uglify', 'jshint'],
        options: {
          spawn: false,
          reload: true
        },
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('default', ['uglify','sass', 'cssmin', 'autoprefixer', 'imagemin','watch']);
};
