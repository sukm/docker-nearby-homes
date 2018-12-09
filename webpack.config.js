const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/public/dist');

module.exports = {
  entry: path.join(__dirname, 'client/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: DIST_DIR,
  },
  resolve: { extensions: ['.js', '.jsx'] },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};

// https://simonsmith.io/organising-webpack-config-environments/
