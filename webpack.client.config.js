var webpack = require('webpack');
var path = require('path');

module.exports = {
  target: 'web',
  entry: './src/client',
  output: {
    path: root('dist/client')
  },
  module: {
    rules: [
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

export function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
