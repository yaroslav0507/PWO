'use strict';

gulp.task('ionicWebClientInit', function () {
    // Copy ionic io web client to lib folder - specific issue of ionic io client
    return gulp.src(config.paths.src.vendors.ionicWebClient.src)
	.pipe(gulp.dest(config.paths.src.vendors.ionicWebClient.dest));
});

