const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');



module.exports = {
	entry: {
		index: './src/index.js',
		print: './src/print.js',
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Output Management',
		})
	],
	mode: 'development',
	output: {
	  filename: '[name].bundle.js',
	  path: path.resolve(__dirname, 'dist'),
	  clean: true,
	},
};


