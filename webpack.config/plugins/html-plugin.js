const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = 
        new HTMLWebpackPlugin({
            title: 'webpack app',
            template: './public/index.html',
            meta: {
                viewport: "width=device-width, initial-scale=1.0"
            }
        });
