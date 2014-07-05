/*global module:false*/
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'app'
        }
      }
    },

    watch: {
      files: ['app/index.html'],
      options: {
        livereload: true
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['connect', 'watch']);

};
