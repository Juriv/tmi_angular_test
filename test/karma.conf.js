module.exports = function( config ) {
	config.set( {

		// base path, that will be used to resolve files and exclude
		basePath: '../',


		// frameworks to use
		frameworks: [ 'jasmine' ],


		// list of files / patterns to load in the browser
		files: [
			'assets/bower_components/angular/angular.js',
			'assets/bower_components/angular-mocks/angular-mocks.js',
			'assets/bower_components/angular-route/angular-route.js',
			'assets/bower_components/angular-translate/angular-translate.js',
			'assets/js/**/*.js',
			'test/unit/*.js'
		],


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: [ 'Chrome' ],


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false,

		plugins : [
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-jasmine',
			'karma-junit-reporter',
			'karma-coverage'
		],

		junitReporter : {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}

	} );
};