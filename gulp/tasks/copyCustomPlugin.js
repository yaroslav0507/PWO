'use strict';

gulp.task('copyCustomPlugin', function(){
    return gulp.src('client/src/plugin/android/MyPlugin.js')
	.pipe(gulp.dest('www'));
});
