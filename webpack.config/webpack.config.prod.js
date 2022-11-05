const path = require('path');
//const plugins = require('./plugins');
// MiniCssExtractPlugin
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');

const config = merge(commonConfig, {
    mode: 'production',
    module: {
        rules: [
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
module.exports = config;