const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: { app: './index.ts' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/i,
        loader: 'raw-loader',
        exclude: /index.html/
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname), 'node_modules'],
    extensions: ['.ts', '.js', '.json', '.html']
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname)
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
      inject: true
    })
  ],
  devtool: 'source-map'
};
