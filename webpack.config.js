var webpack = require('webpack');

module.exports = {
  entry: "./src/main",
  output: {
      path: __dirname + "/dist",
      filename: "output.bundle.js"
  },
  module: {
    rules: [
    //  {test: /\.css$/, use: 'css-loader'},
      {test: /\.ts$/, use: 'ts-loader'}
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),
  ]
};
