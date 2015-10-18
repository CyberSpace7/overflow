var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'build');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    frameworks: ['jasmine'],
    entry: [
      'webpack/hot/only-dev-server',
      './index.js'
    ],
    output: {
        path: path.join(__dirname, 'build', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.jade$/, loader: 'jade' },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')},

        ]
    },
    resolveLoader: {
        modulesDirectories: [
          'sass',
          'css',
          'views',
          'node_modules'
        ]
      },
    plugins: [
      new ExtractTextPlugin('assets/css/main.css', {
        }),
      new webpack.NoErrorsPlugin()
    ]

};
