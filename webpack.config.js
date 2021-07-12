const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pugConfig = require('./webpack/pugConfig');
const { merge } = require('webpack-merge');
const developmentConfig = require('./webpack/developmentConfig');
const sass = require('./webpack/sass');
const miniCssPlugin = require('./webpack/miniCssPlugin');
const image = require('./webpack/image');


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
        filename: 'dist/js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index', 'common'],
            template: PATHS.sourse + '/pages/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            chunks: ['blog', 'common'],
            template: PATHS.sourse + '/pages/blog/blog.pug'
        }),
        
    ]}, 
    pugConfig(),
    sass(),
    image()
);


module.exports = (env) => {
    if (env.development) {
        return merge([commons, developmentConfig()]);
    }
    if (env.production) {
        return merge([commons, miniCssPlugin()]);
    }
}
