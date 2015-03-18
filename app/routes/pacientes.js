
module.exports = function(app) {
	app.get('/processamentoInclusao', app.controllers.pacientes.inclusao)
}