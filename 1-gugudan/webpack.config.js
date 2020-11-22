const path = require('path');

module.exports = {
  name: 'gugudan setting',
  mode: 'development',
  devtool: 'eval', // hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./client'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};
