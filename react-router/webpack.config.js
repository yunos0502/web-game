const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'games-dev',
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['last 2 chrome versions'] },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            'react-refresh/babel',
            '@babel/plugin-proposal-class-properties',
          ],
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist',
  },
  devServer: {
    // react router: 설정된 URL 외의 경로로 접근한 경우(refresh, 직접 입력) 404 responses : 서버 이슈 => historyApiFallback 옵션 활성화로 해결 가능
    historyApiFallback: true,
    publicPath: '/dist',
    hot: true,
  },
};
