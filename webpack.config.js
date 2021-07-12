const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    sourse: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    mode: 'development',
    entry: {
        'index': PATHS.sourse + '/pages/index/index.js',
        'blog': PATHS.sourse + '/pages/blog/blog.js'
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: PATHS.sourse + '/pages/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            chunks: ['blog'],
            template: PATHS.sourse + '/pages/blog/blog.pug'
        }),
    ],
    module: {
        rules: [
            {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
        }
       ]
    }
};