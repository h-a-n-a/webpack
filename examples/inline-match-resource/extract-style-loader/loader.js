const STYLES_REGEXP = require("./getStyle").STYLES_REGEXP;
const getStylesLoader = require.resolve("./getStyle");

module.exports = function (source) {
	if (STYLES_REGEXP.test(source)) {
		source = source.replace(STYLES_REGEXP, "");
		return `import ${JSON.stringify(
			this.utils.contextify(
				this.context || this.rootContext,
				`${this.resource}.css!=!${getStylesLoader}!${this.remainingRequest}`
			)
		)};${source}`;
	}
	return source;
};
