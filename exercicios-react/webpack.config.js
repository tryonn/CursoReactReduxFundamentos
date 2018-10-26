const webpack = require('webpack')

module.exports = {
    entry: './exercicios-react/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port:8080,
        contentBase: './public',
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_module/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}