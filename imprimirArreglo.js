const imprimirArreglo = (...arreglo) =>{
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))