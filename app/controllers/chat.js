const { emit } = require("../../config/server");

module.exports.iniciaChat = function(application, req, res){

    var dadosForm = req.body;

    req.assert('apelido','Não pode ser vazio!').notEmpty();
    req.assert('apelido','Nome ou apelido deve ter 3 ou 15 caracteres!').len(3,15);

    var erros = req.validationErrors();

    if(erros){
        res.render("index", {validacao : erros});
        return;
    }

    application.get('io').emit('msgParaCliente',{apelido: dadosForm.apelido, mensagem: 'entrou no Chat!'});
    
    res.render("chat", {dadosForm: dadosForm});
} 