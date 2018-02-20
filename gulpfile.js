'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var stripCssComments = require('gulp-strip-css-comments');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');


gulp.task('styles', function() {
  gulp.src('app/public/sass/main.scss')
  .pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }))
  .pipe(stripCssComments({preserve: false})) //preserve: false strips all comments including '/*!' important
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/public/css'))
});


gulp.task('default', ['styles']);