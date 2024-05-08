const sumarRango = (numInicial, numFinal) => {
    let total = 0;
    for (let i = numInicial; i <= numFinal; i++) {
        total += i;
    }
    return total;
}

console.log(sumarRango(0, 10)); // 55 
console.log(sumarRango(12, 14)); // 39 
console.log(sumarRango(5, 5)); // 5 