const {merge} = require('webpack-merge');
const OptimizeCssAssetsWebpackPlugin  = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');

const config = {
    plugins:[
        new OptimizeCssAssetsWebpackPlugin ({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        }),
    ],
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'venders',
                    chunks: 'all'
                }
            }
        },
        minimize: true,
        // default cache true
        minimizer: [new TerserWebpackPlugin({
        })]
    },
    mode: 'production'
}

module.exports = merge(common, config);