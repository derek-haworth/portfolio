'use strict';
var gulp = require('gulp');
// var server = require('gulp-express');
var server = require('gulp-live-server');
var sass = require('gulp-sass');
var stripCssComments = require('gulp-strip-css-comments');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');


gulp.task('styles', function() {
  gulp.src('app/public/assets/sass/main.scss')
  .pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }))
  .pipe(stripCssComments({preserve: false})) //preserve: false strips all comments including '/*!' important
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/public/src/css'))
});


gulp.task('default', ['styles']);

// gulp-express || gulp-live-server

// gulp.task('server', function () {
//     // Start the server at the beginning of the task 
//     server.run(['app.js']);
 
//     // Restart the server when file changes 
//     gulp.watch(['app/**/*.html'], server.notify);
//     gulp.watch(['app/styles/**/*.scss'], ['styles:scss']);
//     //gulp.watch(['{.tmp,app}/styles/**/*.css'], ['styles:css', server.notify]); 
//     //Event object won't pass down to gulp.watch's callback if there's more than one of them. 
//     //So the correct way to use server.notify is as following: 
//     gulp.watch(['{.tmp,app}/styles/**/*.css'], function(event){
//         gulp.run('styles:css');
//         server.notify(event);
//         //pipe support is added for server.notify since v0.1.5, 
//         //see https://github.com/gimm/gulp-express#servernotifyevent 
//     });
 
//     gulp.watch(['app/scripts/**/*.js'], ['jshint']);
//     gulp.watch(['app/images/**/*'], server.notify);
//     gulp.watch(['app.js', 'routes/**/*.js'], [server.run]);
// });
