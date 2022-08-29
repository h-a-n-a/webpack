const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/**
 * @type {import('webpack').Configuration}
 */
const configuration = {
	mode: "none",
	target: "node",
	entry: {
		main: path.resolve(__dirname, "./src/index.js")
	},
	optimization: {
		moduleIds: "named"
	},
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.svg/,
				use: [
					require.resolve("./webpack_loader/jsx"),
					require.resolve("./webpack_loader/svg.js")
				]
			},
			{
				test: /\.js$/,
				use: [require.resolve("./webpack_loader/js-test-loader")]
			},
			{
				test: /\.vue$/,
				use: [require.resolve("./webpack_loader/js-test-loader")]
			}
			// {
			// 	test: /\.less/,
			// 	use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
			// },
			// {
			// 	test: /\.css/,
			// 	use: ["css-loader"]
			// },
			// {
			// 	test: /\.vue/,
			// 	use: [require.resolve("./webpack_loader/vue.js")]
			// }
		]
	}
};

module.exports = configuration;
