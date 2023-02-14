global.NO_TARGET_ARGS = true;
require("../build-common");

// const { webpack } = require("../../lib");
// const { RawSource } = require("webpack-sources");

// class MyPlugin {
// 	apply(compiler) {
// 		compiler.hooks.compilation.tap("MyPlugin", compilation => {
// 			compilation.hooks.processAssets.tap("MyPlugin", assets => {
// 				console.log(assets);
// 				compilation.emitAsset(
// 					"runtime.js",
// 					new RawSource("console.log('hello world')")
// 				);
// 			});
// 		});
// 	}
// }

// webpack(
// 	{
// 		entry: "./main.js",
// 		plugins: [new MyPlugin()]
// 	},
// 	(err, stats) => {
// 		console.log(stats.toJson());
// 	}
// );
