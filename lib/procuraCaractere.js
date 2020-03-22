function procuraCaractere(palavra, caracter){

    var aux = false;

    if(palavra == ''){
        return 'imput de palavra vazio';
    }

    if(caracter == ''){
        return 'impot de caractere vazio';
    }

    for(var i = 1; i < palavra.length; i++){
        if(palavra[i] == caracter){
            aux = true;
        }
    }

    if(aux == true){
        return 'contem o caractere';
    }else{
        return 'nao contem o caractere';
    }

}



module.exports = procuraCaractere;