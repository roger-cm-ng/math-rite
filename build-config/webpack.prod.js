var webpack = require('webpack');
var StringReplacePlugin = require('string-replace-webpack-plugin');
var commons = require('./commons');
var baseUrl = '//morning-island-22730.herokuapp.com';

console.log('production build');

module.exports = {
	resolve: commons.resolve(),

	context: commons.context(),

	entry: commons.entry(),

	output: commons.output(),

	plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
		commons.providePlugin(),
		new StringReplacePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
	],

	devServer: commons.devServer(),

	module: {
		preLoaders: [
      commons.preloadersEslint()
    ],

		loaders: [
			commons.loadersBabel(),
			commons.loadersStyle(),
			commons.loadersJson(),
			commons.loadersStringReplace(/\+\+BASE_URL\+\+/ig, baseUrl),
      commons.loadersStringStrip('console.log'),
			commons.loadersSvg()
		]
	}
}
