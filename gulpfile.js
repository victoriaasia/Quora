'use strict';

const gulp = require('gulp'),
      clean = require('gulp-clean'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      concat = require('gulp-concat'),
      csso = require('gulp-csso'),
      rigger = require('gulp-rigger'),
      image = require('gulp-image'),
      sourcemaps = require('gulp-sourcemaps');

gulp.task('clean', function(done){
  gulp.src('dest', {read: false})
  .pipe(clean())
  done();
});

gulp.task('html', function() {
    gulp.src('source/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('dest'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('sass', function() {
  return gulp.src('source/assets/css/*.*')
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('styles.css'))
      .pipe(autoprefixer({
        browsers: [
          'last 2 versions',
          'ie 11',
          'iOS >= 8',
          'Safari >= 5'
        ],
        cascade: false
      }))
      .pipe(csso())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('dest/assets/css'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('img', function() {
  gulp.src(['source/assets/img/*.*', 'source/assets/img/mob/*.*'])
    // .pipe(image())
    .pipe(gulp.dest('dest/assets/img'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('js', function() {
  gulp.src(['source/js/jquery.min.js', 'source/js/script.js'])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('dest/js'))
    .pipe(browserSync.reload({stream:true}))
});


gulp.task('dev:watch', function() {
  gulp.watch('source/assets/css/*.*', ['sass']);
  gulp.watch('source/*.html', ['html']);
  gulp.watch('source/assets/img/*.*', ['img']);
  gulp.watch('source/js/*.js', ['js']);
});
