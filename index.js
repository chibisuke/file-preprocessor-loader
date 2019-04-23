module.exports = function (source) {
	var loaderUtils;
	this.cacheable && this.cacheable(true);
	loaderUtils = require("loader-utils");
	var FilePreprocessor = require('file-preprocessor').FilePreprocessor;
	const util = require('util');
	query = loaderUtils.parseQuery(this.query);
	try {
		var fp = new FilePreprocessor(query);
		return fp.processString(source);
	} catch (e) {
		this.emitError('ERROR: ' + e)
		throw e;
	}
}
