'use strict';

const webpack = require("webpack");
var node_dir = __dirname + '/node_modules';
const fs = require('fs');


module.exports = {
  context: __dirname + "/app/assets",

  entry: {
    App: [
      'webpack-dev-server/client?http://localhost:8080/assets/',
      'webpack/hot/only-dev-server',
      './javascripts/_application.jsx'
    ]
  },
  output: {
    filename: '[name]_wp_bundle.js', // Will output App_wp_bundle.js
    path: __dirname + '/app/assets/javascripts', // Save to Rails Asset Pipeline
    publicPath: 'http://localhost:8080/assets' // Required for webpack-dev-server
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'jquery': node_dir + '/jquery/dist/jquery.js',
      'materialize-css': node_dir + '/materialize-css/dist/js/materialize.js',
    }
  },
  module: {
      loaders: [
        { test: /\.jsx?$/, loaders: ['react-hot-loader', 'jsx-loader'] },
        {test: /\.jsx?/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
      ]
    },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jQuery",
      "windows.jQuery": "jquery"
    }),
  ]
  };
