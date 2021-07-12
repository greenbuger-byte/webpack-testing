const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pugConfig = require('./webpack/pugConfig');
const { merge } = require('webpack-merge');
const developmentConfig = require('./webpack/developmentConfig');
const sass = require('./webpack/sass');

const PATHS = {
    sourse: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const commons = merge({
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
    ]}, 
    pugConfig(),
    sass()
);


module.exports = (env) => {
    if (env.development) {
        return merge([commons, developmentConfig()]);
    }
    if (env.production) {
        return commons;
    }
}
