'use strict';

module.exports = function() {

   var vendors = {
       scripts: [
           './client/vendors/ionic/js/ionic.bundle.js'
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
                 scripts: vendors.scripts,
                 styles: vendors.styles
             },
             components: components
         }
     }
   };
};
