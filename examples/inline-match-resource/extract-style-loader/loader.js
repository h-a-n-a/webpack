const STYLES_REGEXP = require("./getStyle").STYLES_REGEXP;
const getStylesLoader = require.resolve("./getStyle");

module.exports = function (source) {
	if (STYLES_REGEXP.test(source)) {
		source = source.replace(STYLES_REGEXP, "");
		return `import ${JSON.stringify(
			this.utils.contextify(
				this.context || this.rootContext,
				// `${this.resource}.css!=!${getStylesLoader}!${this.remainingRequest}`
				// This will create a css file(this is a default behavior for expr.css impl) with module type of 'css'
				`${this.resource}.webpack[css]!=!${getStylesLoader}!${this.remainingRequest}`
				// This will create an svg file(default behavior for asset/resource) with module type of 'asset/resource'
				// which solves https://github.com/webpack/webpack/issues/14851
				// `${this.resource}.svg.webpack[asset/resource]!=!${getStylesLoader}!${this.remainingRequest}`
			)
		)};${source}`;
	}
	return source;
};
