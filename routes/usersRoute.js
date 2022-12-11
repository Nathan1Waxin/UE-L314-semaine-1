var express 	= require('express');
var userCtrl	= require('../controllers/usersController');

export.router = (function() {
	var apiRouter = express.Router();

	apiRouter.route('/users').get(usersCtrl.getAllUsers);
	return apiRouter;
})();
