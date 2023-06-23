function somaEComentário(número1, número2) {
    let resultadoDaEquação = número1 + número2;
    if (resultadoDaEquação < 5) {
        return "O seu resultado é menor que 5!";
    }
    if (resultadoDaEquação > 5) {
        return "O seu resultado é maior que 5!"
    }
    if (resultadoDaEquação = 5)
    return "O seu resultado é igual a 5!"
}

// O código acima é limpo porque:

//   1- É simples: declara uma função sem se importar com o número de linhas de tal, junto com ser facilmente replicável.

//   2- É direto: executa o resultado previsto.

//   3- É legível: só de ler já é possível enteder qual será o resultado. Ela segue o uso "camel-case" até o final, e os nomes sao óptimos.