
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: ['assets/js/*.js'],
        dest: 'assets/dist/app.js',
      },
      dist: {
        src: ['assets/css/*.css'],
        dest: 'assets/dist/app.css',
      }
    }

  });

  grunt.registerTask('prod', ['concat']);

};
