const ExtractTextPlugin = require('extract-text-webpack-plugin');
const inProduction = process.env.NODE_ENV === 'production';

module.exports = {

	mode: inProduction ? 'production' : 'development',

	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {},
					}
				],
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: inProduction,
							},
						},
						{
							loader: 'sass-loader',
							options: {},
						},
					],
				}),
			},
		],
	},

	plugins: [
		new ExtractTextPlugin('styles.css'),
	],

}
