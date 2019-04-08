module.exports = function exports() {
  return {
      test: /\.(css)$/,
      exclude: /node_modules\/(?!(myscript)\/).*/,
      loaders: [
          {
              loader: 'style-loader'
          },
          {
              loader:
                  'css-loader'
          },
          {
              loader: 'postcss-loader'
          },
          {
              loader: 'sass-loader'
          }
      ]
  };
};
