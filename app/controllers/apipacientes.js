module.exports = function (app) {

var controller = {};
controller.listar = function(req, res) {
	var Paciente = app.models.paciente
	
	Paciente.find().exec(
		function(err, pacientes){
			console.log("err:"+err)
			console.log("pacientes:"+pacientes)
			res.send(pacientes)
		}
	)
};

controller.recuperarPaciente = function(req, res) {
	var Paciente = app.models.paciente

	Paciente.findOne({"_id":req.params.id}).exec(
		function(err, pacientes){
			console.log("err:"+err)
			console.log("pacientes:"+pacientes)
			res.send(pacientes)
		}
	)
};
return controller;
}