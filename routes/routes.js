var Medical = require('../model/doctor');
var Controller = require ('./controller');

module.exports = function(app) {
	app.get('/api/doctor', Controller.getDoctor);
	app.post('/api/doctor', Controller.setDoctor);
	app.get('/api/doctor/:name', Controller.searchDoctorName);
	app.get('/api/doctor/especialista/:specialty', Controller.searchDoctorSpecialty);

	// application
	app.get('/', function(req, res) {
		res.sendfile('./app/views/index.html');
	});
	app.get('/doctors', function(req, res) {
		res.sendfile('./app/views/Doctors.html');
	});
	app.get('/results', function(req, res) {
		res.sendfile('./app/views/results.html');
	});
};