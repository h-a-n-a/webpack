const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		other: "./other.js",
		main: {
			dependOn: "other",
			import: "./main.js"
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ["babel-loader"]
			}
		]
	},
	plugin: [new HtmlWebpackPlugin()]
};
