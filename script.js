function somar() {

    let N1 = Number(document.getElementById("numero1").value);
    let N2 = Number(document.getElementById("numero2").value);

    let soma = N1 + N2;
    document.getElementById("resposta").innerHTML= "o resultado do calculo é: " + soma;
}

function subtrair() {

    let N1 = Number(document.getElementById("numero1").value);
    let N2 = Number(document.getElementById("numero2").value);

    let subtracao = N1 - N2;
    document.getElementById("resposta").innerHTML= "o resultado do calculo é: " + subtracao;
}

function multiplicar() {

    let N1 = Number(document.getElementById("numero1").value);
    let N2 = Number(document.getElementById("numero2").value);

    let multiplicacao = N1 * N2;
    document.getElementById("resposta").innerHTML= "o resultado do calculo é: " + multiplicacao;
}

function dividir() {

    let N1 = Number(document.getElementById("numero1").value);
    let N2 = Number(document.getElementById("numero2").value);

    let divisao = N1 / N2;
    document.getElementById("resposta").innerHTML= "o resultado do calculo é: " + divisao.toFixed(2);
}
// comentario