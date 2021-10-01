const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: '[LIBRARY_NAME].js',
    path: path.resolve(__dirname, 'build/umd'),
    library: '[LIBRARY_NAME]',
    libraryTarget: 'umd'
  },
  optimization:{
    minimize: true,
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};
