'use strict';

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

/* Release tasks */
gulp.task('buildJS', function(){
    return gulp.src('dist/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify({mangle: true}))
        .pipe(gulp.dest('release'));
});

gulp.task('buildCSS', function(){
    var cssOption = {
        compatibility: 'ie8',
        urlQuotes: 0
    };

    return gulp.src('dist/**/*.css')
        .pipe(concat('app.css'))
        .pipe(minifyCss(cssOption))
        .pipe(gulp.dest('release'));
});

gulp.task('buildHTML', function(){
    return gulp.src('dist/index.html')
        .pipe(gulp.dest('release'));
});

gulp.task('cloneFonts', function(){
    return gulp.src('dist/fonts/**.*')
        .pipe(gulp.dest('release/fonts/'));
});

gulp.task('cloneImages', function(){
    return gulp.src('dist/img/**/*.*')
        .pipe(gulp.dest('release/img/'));
});

gulp.task('release', ['buildJS', 'buildCSS', 'buildHTML', 'cloneFonts', 'cloneImages']);