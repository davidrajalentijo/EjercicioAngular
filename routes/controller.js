var Doctor = require('../model/doctor');

exports.getDoctor = function (req, res){
//GET - Returns All Doctors
	Doctor.find(
		function(err, doctor) {
			if (err)
				res.send(err)
			res.json(doctor);
		}
	);
}

exports.setDoctor = function(req, res) {
//POST - Create New Doctor
	Doctor.create(
		{name : req.body.name, surename: req.body.surename, correo: req.body.correo, specialty: req.body.specialty, hospital : req.body.hospital, city: req.body.city},
		function(err, doctor) {
			if (err)
				res.send(err);
			Doctor.find(function(err, doctor) {
				if (err)
					res.send(err)
				res.json(doctor);
			});
		});

}

exports.searchDoctorName = function(req, res) {
//GET - Returns a Doctor by Name
		Doctor.find({"name":req.params.name}, function (err, doctors) {
			if (!err) {
				res.json(doctors);
			} else {
				console.log('ERROR: ' + err);
			}
		});
}
exports.searchDoctorSpecialty = function(req, res) {
//GET - Returns a Doctor by specialty
		Doctor.find({"specialty":req.params.specialty}, function (err, doctors) {
			if (!err) {
				res.json(doctors);
			} else {
				console.log('ERROR: ' + err);
			}
		});
}