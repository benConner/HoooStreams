module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
          sourceMap: true,
          outputStyle: 'compressed',
      },
      dist: {
          files: {
              'style/main.css': 'style/main.scss'
          }
      },
    },
    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: ['sass'],
      },
    },
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');


  // Default task(s).
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('cssTask', ['sass', 'watch'])

};
