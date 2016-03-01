var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'tap' ], //use the mocha test framework
    files: [
      'tests.webpack.js' //just load this file
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coverage',
      'karma-tap',
      'karma-tape-reporter'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'tape', 'coverage' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      node: {
        fs: 'empty'
      },
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            include: /src/,
            exclude: /(node_modules|test)/,
            loader: 'babel-istanbul'
          }
        ],
        loaders: [
          { test: /\.js$/,  loader: 'babel-loader' }
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },
    coverageReporter: {
      reporters: [
        {
          type: 'text-summary'
        },
        {
          type: 'html', //produces a html document after code is run
          dir: 'coverage/' //path to created html doc
        }
      ]
    }
  });
};
