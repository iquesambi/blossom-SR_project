  const webpack = require('webpack');
  const path = require('path');

  const config = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, '../src/static'),
        publicPath: '/static/',
        filename: 'js/bundle.js'
      },
      devServer: {
        historyApiFallback: true,
        proxy: {
          '*': 'http://localhost:8000'
        },
      },
      module: {
        rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: 'babel-loader'
          },
          {
            test: /\.svg$/,
            use: ['url-loader'], // or 'file-loader'
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
              },
            ],
          },
          {
            test: /\.json$/,
            type: 'javascript/auto',
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
              },
            ],
          },
          {
            test: /\.(css|scss)$/,
            use: [
              {
                loader: "style-loader"
              }, {
                loader: "css-loader"
              }, {
                loader: "sass-loader"
              }
            ]
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
      }
  };
  module.exports = config;
