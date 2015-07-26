module.exports = function(grunt) {

  // see: https://github.com/sindresorhus/load-grunt-tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      // build bundle.js from main.js
      'static/js/bundle.js': ['static/js/main.js']
    },
    jshint: {
      all: ['Gruntfile.js', 'static/js/main.js']
    },
    watch: {
      lint: {
        files: ['Gruntfile.js', 'static/js/main.js'],
        tasks: ['jshint']
      },
      browserify: {
        files: [ 'static/js/main.js' ],
        tasks: [ 'browserify']
      }
    }
  });
};
