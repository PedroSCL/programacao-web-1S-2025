function transporMatriz(A){
    console.log('Matriz \n')
    for(let i = 0; i < A.length; i++){
        let linha = "";
        for(let j = 0; j < A[i].length; j++){
            linha += A[i][j] + "\t";
        }
        console.log(linha);
    }

    console.log('\nTransposta \n');
    for(let j = 0; j < A[0].length; j++){
        let linha = "";
        for(let i = 0; i < A.length; i++){
            linha += A[i][j] + "\t";
        }
        console.log(linha);
    }
}

let matriz = [
    [6, 5],
    [4, 3],
    [2, 1]
];

transporMatriz(matriz);