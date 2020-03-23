const separaPalavras = require('../lib/separaPalavras');

describe('separaPalavras', () => {

    test('contem palavras', () => {
        expect(separaPalavras(vetor = [4, 'lucas'])).toBe('A estring contem palavras');
    });

    test('nao contem palavras', () => {
        expect(separaPalavras(vetor = ['3', '7'])).toBe('A string nao contem palavras');
    });


});