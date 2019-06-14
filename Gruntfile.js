const getPugData = require('./bundler/pug.js')

module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      files: {
        expand: true,
        cwd: 'src/js',
        src: '**/*.js',
        dest: 'build/js'
      }
    },
    cssmin: {
      files: {
        expand: true,
        cwd: 'src/css',
        src: '**/*.css',
        dest: 'build/css'
      }
    },
    pug: {
      files: {
          src: 'src/pug/index.pug',
          dest: 'build/index.html'
      },
      options: {
          data: getPugData()
      }
    },
    copy: {
      files: {
        expand: true,
        cwd: 'static',
        src: '**',
        dest: 'build/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['uglify', 'cssmin', 'pug', 'copy']);

};
