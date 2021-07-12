const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    sourse: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    mode: 'development',
    entry: PATHS.sourse + '/index.js',
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack app'
        })
    ]
};