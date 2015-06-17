/*
 * grunt-ftp-push
 * http://robert-w.github.io/grunt-ftp-push
 *
 * Copyright (c) 2013 Robert Winterbottom
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    ftp_push: {
      default: {
        options: {
          authKey: "serverA",
          host: "sample.server.com",
          dest: "/html/test/",
          port: 21
        },
        files: [ // Enable Dynamic Expansion, Src matches are relative to this path, Actual Pattern(s) to match
          {expand: true,cwd: 'test',src: ['**/*']},
          {expand: true,cwd: 'tasks',src: ['**/*'], dest: 'tasks/' }
        ]
      },

      sample: {
        options: {
          host: "sample.server.com",
          dest: "/html/test/",
          username: 'myUsername',
          password: 'myPassword',
          debug: true // Show JSFTP Debugging information
        },
        files: [
          {expand: true,cwd: './',src: ['test/nested/another/sample.js']}
        ]
      },

      custom: {
        options: {
          authOptions: {
            path: 'sftp-config.json',
            username: 'user'
          },
          host: "localhost",
          dest: "/html/test/",
          debug: true // Show JSFTP Debugging information
        },
        files: [
          {expand: true,cwd: './',src: ['test/nested/another/sample.js']}
        ]
      }

    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');
  
  grunt.registerTask('test', ['ftp_push']);
  grunt.registerTask('sample', ['ftp_push:sample']);

};
