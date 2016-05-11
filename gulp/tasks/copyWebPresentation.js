'use strict';
const seq = require('merge2');

gulp.task('copyWebPresentation', function(){
    let APK = gulp.src('platforms/android/build/outputs/apk/android-debug.apk');
    let assets = gulp.src('web/**/*');

    seq([assets, APK])
	.pipe(gulp.dest('www'));
});