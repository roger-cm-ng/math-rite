module.exports = function() {
    return {
        test: /\.(gif|png|jpe?g)$/i,
        exclude: /node_modules/,
        loaders: [
            {
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                    outputPath: 'assets/images/'
                }
            }
        ]
    };
};
