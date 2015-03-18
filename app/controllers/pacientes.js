module.exports = function (app) {

var controller = {};
controller.inclusao = function(req, res) {
	var Paciente = app.models.paciente
	Paciente.create({nome: req.query.nome, email: req.query.email}).then(
		function(p){
			res.render('processamentoInclusao', {id: p._id,nome: req.query.nome, email: req.query.email});
		},
		function(erro){
			res.send('erro: '+erro)
		}
	)
	
};
return controller;
}