'use strict';

module.exports = function() {

   var vendors = {
       ionicWebClient: {
           src: './client/vendors/ionic-platform-web-client/dist/',
           dest: './www/lib/ionic-platform-web-client/dist/'
       },
       scripts: [
           './client/vendors/ionic/js/ionic.bundle.js',
           './client/vendors/d3/d3.min.js',
           './client/vendors/pie-chart/dist/pie-chart.min.js',
           './client/vendors/ngCordova/dist/ng-cordova.min.js'
       ],
       styles: [
           './client/vendors/ionic/css/ionic.css'
       ]
   };

    var components = [
        './client/src/app/app.js',
        './client/src/**/*.js',
        '!./client/src/**/*.spec.js'
    ];

   return {
     paths: {
         src: {
             vendors: {
                 ionicWebClient: vendors.ionicWebClient,
                 scripts: vendors.scripts,
                 styles: vendors.styles
             },
             components: components
         }
     }
   };
};
