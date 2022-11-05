const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');

const devConfig = merge(commonConfig, {
    mode: 'development',
    devtool: 'eval',
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
          },
        ],
      },
});
module.exports = devConfig;