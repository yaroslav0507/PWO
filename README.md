[![Build Status](https://travis-ci.org/yaroslav0507/PWO.svg?branch=master)](https://travis-ci.org/yaroslav0507/PWO)
Plant Watering Organizer
=====================

## Stack of technologies
<img align="right" src="https://www.dropbox.com/s/ri275hyw3p33ah7/PWO_Logo.png?dl=1" alt="Plant Watering Organizer" height="150px">
- [Apache Cordova](https://cordova.apache.org/);
- [Ionic](http://ionicframework.com/);
- [Angular JS](https://angularjs.org/);
- [Node JS](https://nodejs.org/);
- [Gulp](http://gulpjs.com/)

### Demo
You can visit [demo page](http://yaroslav0507.github.io/PWO) of web version. Note that some features such as notifications and vibration would not work.
Also you can [download APK](http://yaroslav0507.github.io/PWO/android-debug.apk) and install it on your device. 
Demo page is generated on `travis-ci`. It deploys to `gh-pages` automaticaly every time when build is successfull.

### Dependency
For this application I've written a [Toaster plugin](https://github.com/yaroslav0507/cordova-plugin-toaster). It gives you an opportunity to use native android toasts. Plugin is published to `NPM` and installs automatically.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ git clone git@github.com:yaroslav0507/PWO.git # or clone your own fork
$ cd PWO
$ npm install
$ npm start
```

Your app should now be running on [port #4000](http://localhost:4000/).

Default browser should open and display application in the new tab.
All changes in the code will be immediately reflected in your browser by [browser-sync](http://browsersync.io/)

## Build commands
```sh
$ ionic build android - for android build
$ ionic build ios - for ios build

$ ionic emulate android - to start app in AVD
```

## Deploying to device
There are two ways how you can deploy application to device.

1. Copy apk from `PWO/platforms/android/build/outputs/apk/android-debug.apk` to your device and install it under file system.
2. Connect device via USB cable and execute next command in console (Android SDK and Ionic CLI is required)
    `ionic run android` - for android devices
    `ionic run ios` - for ios devices


## Interface

![Views](https://www.dropbox.com/s/9rcmth2jer7yoyt/Collage.jpg?dl=1)

PS: All images and content are used for application demonstration and fun :)
