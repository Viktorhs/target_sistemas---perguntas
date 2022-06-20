function fibonacci(num){
    let valor1 = 0;
    let valor2 = 1;
    let resultado;
    let i = 0;
    let numero;


    while(i <= num){
        resultado = valor1 + valor2;
        valor1 = valor2;
        valor2 = resultado;
        if(resultado === Number(num)){
            numero = resultado;
        }
        i++
    }

    if(numero == num){
        return "Pertence a sequencia"
    }else{
        return "Não pertence a sequencia"
    }
}

console.log(fibonacci(34));
console.log(fibonacci(35));