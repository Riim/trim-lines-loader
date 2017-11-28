module.exports = function(content) {
	this.cacheable();
	return content.trim().replace(/[\x20\t]*([\r\n]+)[\x20\t]*/g, '$1');
};
