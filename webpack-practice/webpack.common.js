const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')

const isProduction = process.env.NODE_ENV === 'PRODUCTION';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: 
                [
                    // {
                    //     loader: 'style-loader',
                    //     options: {
                    //         injectType: 'singletonStyleTag'
                    //     }   
                    // },
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                ]
            },
            {
                test: /\.hbs$/,
                use: ['handlebars-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: 
                [
                    {
                        loader: 'file-loader',
                        options: 
                        {
                            name(resourcePath, resourceQuery) {
                                if (process.env.NODE_ENV === 'DEVELOPMENT') {
                                    return '[path][name].[ext]';
                                }
                                return '[contenthash].[ext]';
                            },
                            publicPath: 'assets/', // src에서 파일 이름에 붙는 경로
                            outputPath: 'assets/' // 빌드시 생성되는 경로
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: '[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            title: 'webbpack hbs',
            template: './template.hbs',
            meta: {
                viewport: 'width=device-width, initial-scale=1'
            },
            minify: isProduction? {
                collapseWhitespace: true,
                useShortDoctype: true
            } : false
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            IS_PRODUCTION: isProduction
        })
    ]
}