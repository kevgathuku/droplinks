module.exports = function(grunt) {
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
      files: [ 'static/js/main.js' ],
      tasks: [ 'browserify' ]
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
};
