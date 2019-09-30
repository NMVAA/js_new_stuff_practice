const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'main.js',
    publicPath: 'js/',
  },
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
    ],
  },
};

module.exports = (env, options) => {
  config.devtool = options.mode === 'production' ? false : 'cheap-eval-source-map';
  return config;
};
