/*global module:false*/

var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function(grunt) {

  // load all grunt task
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.    
    watch: {
      less: {
        files: "app/css/*.less",
        tasks: ["less"]
      },
      livereload: {
        files: ["app/*.html",
                "app/css/{,*/}*.css",
                "app/scripts/{,*/}*.js"],
        tasks: ["livereload"]
      }
    },
    livereload: {
      port: 35729
    },
    connect : {
      livereload: {
        options: {
          port: 9001,
          base: 'app',
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, options.base)]
          }
        }
      }
    },
    open: {
      server: {
          path: 'http://localhost:9001/'
      }
    },
    less: {
      development: {
        files: {
          "app/css/screen.css": "app/css/screen.less"
        }
      }
    }
  });

  grunt.renameTask('regarde', 'watch');

  grunt.registerTask('default', ['livereload-start','connect:livereload', 'open', 'watch']);

};
