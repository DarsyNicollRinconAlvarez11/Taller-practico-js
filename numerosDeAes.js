const numeroDeAes = (letras) => {
    let contador = 0;
    for (let i = 0; i < letras.length; i++) {
        if (letras[i] === 'a') {
            contador++;
        }
    }
    return contador;
}

console.log(numeroDeAes("abracadabra")); // 5 
console.log(numeroDeAes("etinol")); // 0 
console.log(numeroDeAes("")); // 0 
