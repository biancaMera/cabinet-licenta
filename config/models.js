'use strict';

module.exports.init = function(app) {
  var modelsPath = app.get('root') + '/server/models/';
	let modelsArray = ['user'];

	  modelsArray.forEach(function(model) {
    require(modelsPath + model);
  });
}