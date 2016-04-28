'use strict';
var runSequence = require('run-sequence');

gulp.task('build', function(callback){
    console.log(">> BUILD MODE: ", process.env.PRODUCTION ? "PRODUCTION" : "DEVELOPMENT");

    runSequence('scripts', 'styles', 'html', 'fonts', 'images', callback)
});

gulp.task('serve', ['build', 'watch'], function(){

    browserSync.init(null, {
        server: {
            baseDir: process.env.SERVE_DIR
        },
        open: "local",
        port: process.env.SERVER_PORT
    });

    gulp.watch('./dist/index.html').on('change', browserSync.reload);
});

