var mongoose = require('mongoose');

module.exports = mongoose.model('Doctor', {
	name: String,
	surename: String,
	correo: String,
	specialty: String,
	hospital: String,
	city : String
});