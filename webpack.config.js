const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pages = ["index", "gotovie", "navMenu"];

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    mode: "development",
    plugins: [].concat(
        pages.map(
            (page) =>
                new HtmlWebpackPlugin({
                    inject: true,
                    template: `./src/${page}.html`,
                    filename: `${page}.html`,
                    chunks: ["index"],
                }),
        ), new MiniCssExtractPlugin()
    ),
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "resolve-url-loader",
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name][ext]',
                },
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
};