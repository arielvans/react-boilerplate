const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDevelopment = process.env.NODE_ENV === 'development';
const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				include: path.resolve(__dirname, './styles.scss'),
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.js$|jsx/,
				loader: "babel-loader"
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss']
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: isDevelopment ? '[name].css' : '[name].[hash].css',
			chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './app/index.html',
			filename: './index.html' 
		})
	],
};