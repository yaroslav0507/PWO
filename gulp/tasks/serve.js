'use strict';
var runSequence = require('run-sequence');

gulp.task('dev', function(callback){
    runSequence('scripts', 'styles', 'html',  'fonts', 'images', 'watch', callback)
});

gulp.task('serve', ['dev'], function(){

    browserSync.init(null, {
        server: {
            baseDir: process.env.SERVE_DIR
        },
        browser: "google chrome",
        port: process.env.SERVER_PORT
    });

    gulp.watch('./dist/index.html').on('change', browserSync.reload);
});

