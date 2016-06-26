'use strict';

module.exports.init = function(app) {
  var modelsPath = app.get('root') + '/server/models/';
	let modelsArray = ['user', 'specialization', 'location', 'judet', 'medic', 'question', 'answer'];

	  modelsArray.forEach(function(model) {
    require(modelsPath + model); //Inregistreaza fiecare model
  });
}