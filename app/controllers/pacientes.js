module.exports = function() {
var controller = {};
controller.inclusao = function(req, res) {
var query = require('url').parse(req.url,true).query;

res.render('processamentoInclusao', {nome: req.query.nome});
};
return controller;
}