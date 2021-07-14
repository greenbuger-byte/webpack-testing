const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")

module.exports = (paths) => {
    return {
        module: {
            rules: [{
                test: /\.scss$/,
                include: paths,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        // options: {
                        //     postcssOptions: [
                        //         autoprefixer,
                        //         cssnano
                        //     ]
                        // }
                    },
                    'sass-loader'
                ]
            }]
        }
    }
}