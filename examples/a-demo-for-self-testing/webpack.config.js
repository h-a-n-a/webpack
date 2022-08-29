module.exports = {
	entry: {
		main: "./main.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ["babel-loader"]
			}
		]
	}
};
