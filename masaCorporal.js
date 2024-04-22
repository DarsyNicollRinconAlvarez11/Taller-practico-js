let  totalImc = 0
const imc = (peso,altura)=>{
    totalImc  = peso/altura**2;
    if (totalImc < 18.5) {
        console.log("Bajo de peso")
    } else if ((totalImc >= 18.5) && (totalImc <= 24.9)) {
        console.log("Normal")
    }else if ((totalImc >= 25) && (totalImc <= 29.9)) {
        console.log("Sobrepeso")
    }else if (totalImc >= 30)  {
        console.log("Obeso")
    }
    
}
console.log(imc(65, 1.8)) // "Normal"
console.log(imc(72, 1.6)) // "Sobrepeso"
console.log(imc(52, 1.75)) // "Bajo de peso"
console.log(imc(135, 1.7)) // "Obeso"