const webpack = require('webpack');

const config = {
    entry: './js/script.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }
        ]
    }
};


module.exports = config;