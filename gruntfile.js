module.exports = function(grunt) {

  // Load the plugin that provides the "uglify" task.
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    uglify: {
      build: {
        options: {
          sourceMap: true
        },
        files: {
          'js/scripts.min.js': ['js/*.js', '!js/jquery.js', '!js/*.min.js']
        }
      }
    },
    cssmin: {
      minify: {
        src: 'css/*.css',
        dest: 'css/slideshow.min.css',
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['js/*.js', '!js/*.min.js'],
        tasks: ['uglify']
      },
      css: {
        files: ['css/*.css', '!css/*.min.css'],
        tasks: ['cssmin']
      },
      min : {
        files: ['js/*.min.js', 'css/*.min.css'],
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'connect', 'watch']);

};