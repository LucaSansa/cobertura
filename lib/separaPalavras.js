var er = /^[0-9]+$/;

function separaPalavras(vetor){
    
    var vetorPalavras = Array();
    var cont = 0;

    for(var i = 0; i < vetor.length; i++){
        
        var aux = (er.test(vetor[i]));

        if(aux == false){
            vetorPalavras.push(vetor[i]);
            cont++;
        }
    }

    if(cont > 0){
        return 'A estring contem palavras';
    }else{
        return 'A string nao contem palavras';
    }

}

module.exports = separaPalavras;




