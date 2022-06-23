const acorn = require("acorn");
let isEntry = true;
module.exports = function (source) {
	if (!isEntry) {
		return this.callback(null, source);
	}

	isEntry = false;
	const content = `import png from "./images/file.png";
  ${source}`;
	const ast = acorn.parse(content, {
		ranges: true,
		locations: true,
		ecmaVersion: 11,
		sourceType: "module"
	});
	ast.comments = [];
	// return reusable ast
	// this.callback(null, "", null, {
	// 	webpackAST: ast
	// });

	// return source
	this.callback(null, content);
};
