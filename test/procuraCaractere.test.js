const procuraCaractere = require('../lib/procuraCaractere');

describe('procuraCaractere', () => {

    test('palavra vazia', () => {
        expect(procuraCaractere('', 'x')).toBe('imput de palavra vazio');
    });

    test('caractere vazio', () => {
        expect(procuraCaractere('lucas', '')).toBe('impot de caractere vazio');
    });

    test('contem caractere', () => {
        expect(procuraCaractere('lucas', 's')).toBe('contem o caractere');
    });
    
    test('nao contem caractere', () => {
        expect(procuraCaractere('lucas', 'd')).toBe('nao contem o caractere');
    });

});