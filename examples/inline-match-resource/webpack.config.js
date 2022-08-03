/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					require("path").resolve(__dirname, "./extract-style-loader/loader.js")
				]
			}
		]
	},
	experiments: {
		css: true
	}
};
