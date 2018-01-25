const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = {
    entry: './js/script.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};


module.exports = config;