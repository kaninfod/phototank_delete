'use strict';

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_dir = __dirname + '/node_modules';
const fs = require('fs');
const prod = process.argv.indexOf('-p') !== -1;
const css_output_template = prod ? "stylesheets/[name]-[hash].css" : "stylesheets/[name].css";
const js_output_template = prod ? "javascripts/[name]-[hash].js" : "javascripts/[name].js";

module.exports = {
  context: __dirname + "/app/assets",

  entry: {
    application: "./javascripts/_application.jsx"
  },
  resolve: {
    alias: {
      'jquery': node_dir + '/jquery/dist/jquery.js',
      'materialize-css': node_dir + '/materialize-css/dist/js/materialize.js',
    }
  },
  output: {
    path: __dirname + "/app/assets",
    filename: js_output_template,
  },
  module: {
      loaders: [
        { test: /vendor\/.+\.(jsx|js)$/,
          loader: 'imports?jQuery=jquery,$=jquery,this=>window'
        },
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("css-loader!sass-loader")
        }
      ]
    },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jQuery",
      "windows.jQuery": "jquery"
    }),
    new ExtractTextPlugin(css_output_template),
    function() {
      // output the fingerprint
      this.plugin("done", function(stats) {
        let output = "ASSET_FINGERPRINT = \"" + stats.hash + "\""
        fs.writeFileSync("config/initializers/fingerprint.rb", output, "utf8");
      });
    },
    function() {
    // delete previous outputs
    this.plugin("compile", function() {
      let basepath = __dirname + "/public";
      let paths = ["/javascripts", "/stylesheets"];

      for (let x = 0; x < paths.length; x++) {
        const asset_path = basepath + paths[x];

        fs.readdir(asset_path, function(err, files) {
          if (files === undefined) {
            return;
          }

          for (let i = 0; i < files.length; i++) {
            fs.unlinkSync(asset_path + "/" + files[i]);
          }
        });
      }
    });
  }
  ]
  };
