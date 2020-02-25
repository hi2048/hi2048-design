const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = ({ prod = false, publish = false }) => ({
    mode: (prod || publish)?"production" : "development",
    devtool: "source-map",
    entry: {
        index: path.join(__dirname, publish?'src/components' : 'examples/src/index.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, publish?'./lib' : './dist'),
        libraryTarget: publish?'umd' : 'var'
    },
    plugins: publish?[
        new CleanWebpackPlugin()
    ] : [
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'examples/index.html')
        })
    ],
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: 'eslint-loader',
            //     exclude: /node_module/
            // },
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    }
})