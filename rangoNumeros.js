const contarRango = (a, b) => {
    let contador = 0;
    for (let i = a + 1; i < b; i++) {
        contador++;
    }
    return contador;
}

console.log(contarRango(1, 9));    //  7
console.log(contarRango(1332, 8743)); //  7410
console.log(contarRango(5, 6));     //  0

/* FORMULA ALTERNA QEU SOLUCIONA EL PROBLEMA, CREADA EN COLABORACION CON ALEJANDRO
let numbers = 0
const countNum = (a,b) =>{
    numbers = ((a-b)+1)*(-1)
    console.log(numbers)
}
console.log(countNum(1332,8743))*/