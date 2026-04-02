function obterValores() {

    let valor1 = document.getElementById("n1").value;
    let valor2 = document.getElementById("n2").value;

    if (valor1 === "" || valor2 === "") {
        alert("Por favor, preencha os dois campos com números!");
        return null;
    }

    let n1 = parseFloat(valor1);
    let n2 = parseFloat(valor2);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, insira apenas números válidos!");
        return null;
    }

    return { n1, n2 };
}

function exibirResultado(resultado) {
    let elementoResultado = document.getElementById("resultado");

    if (Number.isInteger(resultado)) {
        elementoResultado.textContent = resultado;
    } else {

        elementoResultado.textContent = resultado.toFixed(2);
    }
}

function somar() {

    let valores = obterValores();
    if (valores === null) {
        return;
    }

    let resultado = valores.n1 + valores.n2;
    exibirResultado(resultado);
}

function subtrair() {

    let valores = obterValores();
    if (valores === null) {
        return;
    }

    let resultado = valores.n1 - valores.n2;
    exibirResultado(resultado);
}

function multiplicar() {

    let valores = obterValores();
    if (valores === null) {
        return;
    }

    let resultado = valores.n1 * valores.n2;
    exibirResultado(resultado);
}

function dividir() {

    let valores = obterValores();
    if (valores === null) {
        return;
    }

    if (valores.n2 === 0) {
        alert("Não é possível dividir por zero!");
        return;
    }

    let resultado = valores.n1 / valores.n2;
    exibirResultado(resultado);
}