'use strict';

const seq = require('sequence-stream'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  templateCache = require('gulp-angular-templatecache');

gulp.task('scripts', function () {

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
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('./', {sourceRoot: '/client'}))
    .pipe(gulp.dest('www/js/'))
    .on('end', browserSync.reload);
});

