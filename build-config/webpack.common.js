const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const path = require('path');
const commons = require('./commons');

module.exports = {
    resolve: commons.resolve(),

    context: commons.context(),
    devtool: 'source-map',
    entry: commons.entry(),

    plugins: [
        commons.providePlugin(),
        new ProgressBarPlugin(),
        commons.stylelintPlugin(),
        commons.hashedModuleIds(),
        ...commons.commonCodeChunksPlugin()
    ],

    devServer: commons.devServer(),

    module: {
        rules: [
            commons.preloadersEslint(),
            commons.loadersBabel(),
            commons.loadersStyle(),
            commons.loadersImages(),
            commons.loadersJson()
        ]
    }
};
