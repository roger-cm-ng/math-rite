const path = require('path');
const webpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.common');

module.exports = webpackMerge(CommonConfig, {
    watch: true,

    output: {
        path: path.resolve('public/bundles'),
        filename: '[name].js',
        publicPath: '/',
        jsonpFunction: 'DUCSChunkJSONPLoader'
    }
});
