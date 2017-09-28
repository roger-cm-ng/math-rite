var StringReplacePlugin = require('string-replace-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var commons = require('./commons');
var baseUrl = 'http://localhost:3000';

console.log('development build');

module.exports = {
	resolve: commons.resolve(),

	context: commons.context(),

	entry: commons.entry(),

	output: commons.output(),

	watch: true,

	plugins: [
		commons.providePlugin(),
		new StringReplacePlugin(),
		new ProgressBarPlugin()
	],

	devServer: commons.devServer(),

	module: {
		preLoaders: [
      commons.preloadersEslint()
    ],

		loaders: [
			commons.loadersBabel(),
			commons.loadersStyle(),
			commons.loadersStyleGlobal(),
			commons.loadersJson(),
			commons.loadersStringReplace(/\+\+BASE_URL\+\+/ig, baseUrl),
			commons.loadersSvg()
		]
	}
}
