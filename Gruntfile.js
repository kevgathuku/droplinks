module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      // build bundle.js from main.js
      'static/js/bundle.js': ['static/js/main.js']
    }
  })
  grunt.loadNpmTasks('grunt-browserify')
}
