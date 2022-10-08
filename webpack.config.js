const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');



module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		print: './src/print.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist'
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Development',
		})
	],
	mode: 'development',
	output: {
	  filename: '[name].bundle.js',
	  path: path.resolve(__dirname, 'dist'),
	  clean: true,
	},
	optimization: {
		runtimeChunk: 'single',
	}
};


