
function criarMatriz(linhas, colunas) {
    var matriz = [];
    for (var i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (var j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10);
        }
    }
    return matriz;
}


function somarMatrizes(matrizA, matrizB) {
    var linhas = matrizA.length;
    var colunas = matrizA[0].length;

    var resultado = [];
    for (var i = 0; i < linhas; i++) {
        resultado[i] = [];
        for (var j = 0; j < colunas; j++) {
            resultado[i][j] = matrizA[i][j] + matrizB[i][j];
        }
    }
    return resultado;
}


function multiplicarMatrizINT(matriz, numero) {
    var resultado = [];
    for (var i = 0; i < matriz.length; i++) {
        resultado[i] = [];
        for (var j = 0; j < matriz[i].length; j++) {
            resultado[i][j] = matriz[i][j] * numero;
        }
    }
    return resultado;
}


function exibirMatriz(matriz) {
    document.write('<table>');
    for (var i = 0; i < matriz.length; i++) {
        document.write('<tr>');
        for (var j = 0; j < matriz[i].length; j++) {
            document.write('<td>' + matriz[i][j] + '</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}


document.write('<br>Matriz A:<br>');
var matrizA = criarMatriz(2, 2);
exibirMatriz(matrizA);

document.write('<br>Matriz B:<br>');
var matrizB = criarMatriz(2, 2);
exibirMatriz(matrizB);

document.write('<br>Soma das matrizes A + B:');
if(matrizA.length == matrizB.length && matrizA[0].length == matrizB[0].length){
    var matrizSoma = somarMatrizes(matrizA, matrizB);
    exibirMatriz(matrizSoma);

}else{
    document.write('As matrizes não podem ser somadas');
}

document.write('<br>Multiplicação da matriz A * 2:');
var matrizProduto = multiplicarMatrizINT(matrizA, 2);
exibirMatriz(matrizProduto);