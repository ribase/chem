const {resolve} = require('path')
const {argv} = require('yargs')
const webpack = require("webpack");
const jquery = require("jquery")
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GlobalizePlugin = require( 'globalize-webpack-plugin' );

/*** variables start */
const webRoot = resolve(__dirname, ".")
const outputPath = resolve(webRoot, "../dist/")
const mode = (argv.mode === 'dev webpack ') ? 'production' : 'development'

/*** variables end */

const config = {
    mode: mode,
    resolve: {
        modules: [
            resolve(__dirname, 'node_modules')
        ]
    },
    node: {
        fs: "empty"
    },
    entry: {
        'scripts.min': [
            '@babel/polyfill',
            './js/includes.js'
        ]
    },
    devtool: "source-map",
    output: {
        path: outputPath,
        filename: "js/[name].js",
        sourceMapFilename: '[file].map'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?sourceMap!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true"
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name(file) {
                                return '[hash].[ext]';
                            },
                            publicPath: '../'
                        },
                    },
                ]
            },
            /* babel => compile new js features down for older browsers */
            {
                test: /\.m?js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    "targets": {
                                        "browsers": ["last 2 versions", "ie >= 10"]
                                    }
                                }
                                ]],
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/styles.min.css", {
            allChunks: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            options: {
                postcss: [autoprefixer]
            },
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: resolve(webRoot),
        hot: true
    }
}

module.exports = config;
