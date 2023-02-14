module.exports = {
	output: {
		assetModuleFilename: "images/[hash][ext]"
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|svg)$/,
				type: "asset"
			},
			{
				test: /\.js$/,
				use: [require("path").resolve("./js-loader")],
				type: "javascript/auto"
			}
		]
	}
};
