'use strict';

const sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    seq = require('merge2'),
    cssGlobbing = require('gulp-css-globbing'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCss = require('gulp-minify-css'),
    gulpif = require('gulp-if');


gulp.task('styles', function () {
    let PRODUCTION;

    (function(){
	PRODUCTION = process.env.PRODUCTION ? true : false;
    })();

    var cssOption = {
	compatibility: 'ie8',
	urlQuotes: 0
    };

    var compile = gulp.src(['./client/scss/core.scss'], {base: 'app'})
	.pipe(cssGlobbing({
	    extensions: ['.scss']
	}))
	.pipe(sass())
	.pipe(gulpif(!PRODUCTION, sourcemaps.init()))
	.pipe(gulpif(PRODUCTION, minifyCss(cssOption)))
	.pipe(gulpif(!PRODUCTION, sourcemaps.write('maps', {sourceRoot: '/client'})));

    var assets = gulp.src(config.paths.src.vendors.styles);

    // Combine all the streams
    return seq([assets, compile])
	.pipe(concat('app.css'))
	.pipe(gulp.dest('www/css/'))
	.pipe(browserSync.stream());

});
