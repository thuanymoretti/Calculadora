function obterValores() {
    let primeiroNumero = document.getElementById("primeiroNumero").value;
    let segundoNumero = document.getElementById("segundoNumero").value;
    if(primeiroNumero == "" || segundoNumero == "") {
        mostrarResultado("Preencha todos os campos!");
        return null;
    }

    primeiroNumero = parseFloat(primeiroNumero);
    segundoNumero = parseFloat(segundoNumero);
    if(isNaN(primeiroNumero) || isNaN(segundoNumero)) {
        mostrarResultado("Digite apenas números válidos!");
        return null;
    }

    return { primeiroNumero, segundoNumero };
}
function gerenciamentoDeCalculo(calculo) {
    let resultadoOperacao = 0;
    const valores = obterValores();
    if(!valores) return;

    switch(calculo) {
        case 'somar':
            resultadoOperacao = somar(valores);
            break;
        case 'subtrair':
            resultadoOperacao = subtrair(valores);
            break;
        case 'multiplicar':
            resultadoOperacao = multiplicar(valores);
            break;
        case 'dividir':
            if(valores.segundoNumero == 0) {
                mostrarResultado("Não é possível dividir por zero!");
                return;
            }
            resultadoOperacao = dividir(valores);
            break;
        default: 
            mostrarResultado("Não foi possivel realizar o calculo.");
            return;
    }
    mostrarResultado("Resultado: " + resultadoOperacao);
}
function somar(valores) {
    return valores.primeiroNumero + valores.segundoNumero;
}
function subtrair(valores) {
    return valores.primeiroNumero - valores.segundoNumero;
}
function multiplicar(valores) {
    return valores.primeiroNumero * valores.segundoNumero;
}
function dividir(valores) {
    return valores.primeiroNumero / valores.segundoNumero;
}
function mostrarResultado(mensagem) {
    document.getElementById("resultado").innerText = mensagem;
}