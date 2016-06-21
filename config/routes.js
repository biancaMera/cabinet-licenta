'use strict';

module.exports.init = function(app) {
	let routesPath = app.get('root') + '/server/routes';
	app.use('/auth', require(routesPath + '/auth'));
	app.use('/api', require(routesPath + '/users'));
	app.use('/api', require(routesPath + '/admin'));
	app.use('/api', require(routesPath + '/medic'));
}
