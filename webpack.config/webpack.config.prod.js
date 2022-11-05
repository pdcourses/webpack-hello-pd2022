const path = require('path');
//const plugins = require('./plugins');
// MiniCssExtractPlugin

const config = {
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
};
module.exports = config;