module.exports = function(grunt) {

  grunt.initConfig({

    // Watches for changes and runs tasks
    // Livereload is setup for the 35729 port by default
    watch: {
      sass: {
        files: ['sass/**/*.sass'],
        tasks: ['sass:dev'],
        options: {
          livereload: 1337
        }
      },
      coffee: {
        files: ['coffee/**/*.coffee'],
        tasks: ['coffee'],
        options: {
          livereload: 1337
        }
      },
      jade: {
        files: ['**/*.jade'],
        tasks: ['jadephp'],
        options: {
          livereload: 1337
        }
      }
    },

    // Sass object
    sass: {
      dev: {
        files: [
          {
            src: ['**/*.sass', '!**/_*.sass'],
            cwd: 'sass',
            dest: 'css',
            ext: '.css',
            expand: true
          }
        ],
        options: {
          style: 'expanded',
          compass: true
        }
      }
    },

    coffee: {
      options: {
        sourceMap: true,
        sourceRoot: ''
      },
      dist: {
        files: [
          {
            src: '**/*.coffee',
            cwd: 'coffee',
            dest: 'javascript',
            ext: '.js',
            expand: true
          }
        ]
      }
    },

    jadephp: {
      compile: {
        options: {
          // doctype: 'html',
          data: {
            debug: false
          }
        },
        files: [
          {
            expand: true,
            cwd: '',
            dest: '',
            src: ['**/*.jade'], // , '!bower_components/*'
            ext: '.php'
          }
        ]
      }
    }

  });

  // Default task
  grunt.registerTask('default', ['watch']);

  // Load up tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-jade-php');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
