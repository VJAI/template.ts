module.exports = (config) => {
  config.set({
    listenAddress: 'localhost',
    hostname: 'localhost',
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha'],
    coverageIstanbulReporter: {
      reports: ['html', 'json'],
      dir: '.nyc_output',
      fixWebpackSourcePaths: true
    },
    reporters: ['spec', 'coverage-istanbul'],
    files: ['test/index-webpack.ts'],
    preprocessors: { 'test/index-webpack.ts': ['webpack'] },
    webpackMiddleware: { noInfo: true },
    webpack: {
      mode: 'development',
      target: 'web',
      output: { filename: 'bundle.js' },
      resolve: { extensions: ['.ts', '.js'] },
      devtool: 'inline-source-map',
      module: {
        rules: [
          { test: /\.ts$/, use: 'ts-loader' },
          {
            enforce: 'post',
            exclude: /(node_modules|\.test\.[tj]sx?$)/,
            test: /\.ts$/,
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
            }
          }
        ]
      }
    }
  })
};
