'use strict';

var gulp = require('gulp');

gulp.task('watch', function(){
    gulp.watch('client/src/**/*.js', ['scripts']);
    gulp.watch('client/src/plugin/android/**/*.js', ['copyCustomPlugin']);
    gulp.watch(['client/scss/**/*.scss','client/src/**/*.scss'], ['styles']);
    gulp.watch('client/**/*.html', ['html', 'scripts']);
});