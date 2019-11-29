const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: "production",
    entry: './src/main.ts',
    devtool: "inline-source-map",
    performance: {
        hints: false
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new webpack.HashedModuleIdsPlugin(),
    ],
    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: ['babel-loader','ts-loader'],
        }],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        hot: true,
    }
}
