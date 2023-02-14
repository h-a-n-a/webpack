const STYLES_REGEXP = /\/\* STYLE: (.*)\*\//;

module.exports = function (source) {
	const match = source.match(STYLES_REGEXP);
	return match[1];
};

module.exports.STYLES_REGEXP = STYLES_REGEXP;
