module.exports = {
	output: {
		uniqueName: "app"
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [require("path").resolve("./custom-css-loader.js")],
				type: "css"
			}
		]
	},
	experiments: {
		css: true
	}
};
