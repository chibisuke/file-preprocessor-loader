module.exports = function (source) {
	var loaderUtils;
	this.cacheable && this.cacheable(true);
	loaderUtils = require("loader-utils");
	var FilePreprocessor = require('file-preprocessor');
	query = loaderUtils.parseQuery(this.query);
	try {
		var fp = new FilePreprocessor(query);
		return fp.ProcessString(source);
	} catch (e) {
		this.emitError('ERROR: ' + e)
		throw e;
	}
}
