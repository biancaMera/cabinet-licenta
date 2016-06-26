'use strict';

module.exports.isAdmin = isAdmin;
module.exports.isSelf = isSelf;

function isAdmin(req, res, next) {
	let user = req.user;

	if(user.role != 'admin') {
  	res.status(401).json({ message: 'Nu ai permisiunea de admin' });
	}
}

function isSelf(req, res, next) {
	let loggedUser = req.user;
	let user = req.resources.user;

	if(loggedUser._id != user._id) {
  	res.status(401).json({ message: 'Nu ai permisiunea necesara' });
	}
}