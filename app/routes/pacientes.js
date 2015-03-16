var ct = require('../controllers/pacientes')()

module.exports = function(app) {
	app.get('/processamentoInclusao', ct.inclusao)
}