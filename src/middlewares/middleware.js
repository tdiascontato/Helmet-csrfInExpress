exports.middewareGlobal= (req, res, next) =>{
    if(req.body.pessoa == 'Tiago'){
    res.send('O middleware está rodando e você foi pego.')
    }
    next();
};
exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN' ){
        return res.send('Erro');
    }
};