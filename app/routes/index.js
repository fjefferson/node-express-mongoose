var ct = require('../controllers/index')()

module.exports = function(app) {app.get('/', ct.index)}