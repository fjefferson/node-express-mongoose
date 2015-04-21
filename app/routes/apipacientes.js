
module.exports = function(app) {
	app.get('/api/pacientes/:id', app.controllers.apipacientes.recuperarPaciente)
	app.get('/api/pacientes', app.controllers.apipacientes.listar)
}