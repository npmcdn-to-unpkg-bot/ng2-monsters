'use strict';

var gulp = require('gulp');

var config = require('./gulp.config')();

var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var tsProject = tsc.createProject('tsconfig.json');


var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('./src/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/css/*.scss', ['sass']);
});

gulp.task('watch', function () {
    gulp.watch('./src/css/*.scss', ['sass']);
    gulp.watch('./src/app/*.ts', ['ts']);
});

gulp.task('ts-lint', function() {

    return gulp.src('src/app/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }));
});

gulp.task('ts',function() {

    var tsResult = gulp.src('src/app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('src/app'));
});

gulp.task('default', ['sass', 'ts', 'ts-lint'], function() {
    console.log('gulping....');

});



