var Store = require('store-component'),
		supplant = require('store-supplant'),
		marked = require('marked');


/**
 * Expose 'marc'
 */

module.exports = function(data) {

  var store = new Store(data);
  store.use(supplant);

	/**
	 * marc constructor.
	 * @api public
	 */

	function marc(str, fn) {
		var result = marked(str);
		if(fn) {
			result = store.supplant(result, fn);
		}
		return result;
	}

	marc.set = function(name, val) {
		store.set(name, val);
	};

	marc.get = function(name) {
		return store.get(name);
	};

	return marc;

};


