'use strict';

const softwareVersion = '0.1.0';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, ('dist/friday-' + softwareVersion + '.browser/')),
        // File name: (module)-(version).(platform).[min].js
        filename: 'friday.js'
    },

    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: 'src/resources/html/index.html',
          inject: 'body'
        })
    ],

    mode: 'development'

};
