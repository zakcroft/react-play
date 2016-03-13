

var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: { path: __dirname, filename: 'bundle.js' },
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015'],
				exclude: /node_modules/
			}
		]

	},
};