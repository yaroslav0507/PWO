'use strict';

const seq = require('sequence-stream'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    templateCache = require('gulp-angular-templatecache'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if');

gulp.task('scripts', function () {
    let PRODUCTION;

    (function(){
	PRODUCTION = process.env.PRODUCTION ? true : false;
    })();

    const vendors = gulp.src(config.paths.src.vendors.scripts, {base: 'vendors'});

    const app = gulp.src(config.paths.src.components, {base: 'src'});
    const views = gulp.src([
	    './client/src/**/*.html'
	])
	.pipe(templateCache({
	    module: 'app'
	}));

    // Combine all the streams
    return seq([vendors, app, views])
	.pipe(gulpif(!PRODUCTION, sourcemaps.init()))
	.pipe(gulpif(PRODUCTION, ngAnnotate()))
	.pipe(concat('app.js'))
	.pipe(gulpif(PRODUCTION, uglify()))
	.pipe(gulpif(!PRODUCTION, sourcemaps.write('./', {sourceRoot: '/client'})))
	.pipe(gulp.dest('www/js/'))
	.on('end', browserSync.reload);
});