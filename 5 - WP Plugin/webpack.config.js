module.exports = {

	entry: {
		'admin-screen': './src/admin-screen',
		'main': './src/main',
	},

	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},

}
