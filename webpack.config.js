const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin(),
    ],
    output: {
        filename: '[name].bundle.js',
        // filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true, // Enable source maps for better debugging
                            root: path.resolve(__dirname, 'src'), // Set the root directory for resolving URLs
                          }
                      }, {
                        loader: 'sass-loader',
                        options: {
                          sourceMap: true, // <-- !!IMPORTANT!!
                        }
                      }
                    
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
        runtimeChunk: 'single',
    },
};