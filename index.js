let cantidad = prompt('Ingresa la cantidad de personas a calcular su IMC')

function indiceMasaCorporal(peso,altura){
   
    return peso/(altura*altura)*10000
    
}

let numero = 0;

while (numero < cantidad) {
    let peso = 0
    do {
        peso = parseFloat(prompt('Ingresa tu peso en kg'))
        if (isNaN(peso)){        
            alert('El peso ingresado no es correcto')
        }
    } while (isNaN(peso))
        
    let altura = 0
    do {
        altura = parseFloat(prompt('Ingresa altura en cm (ej: 170)'))
        if (isNaN(altura) || altura === 0){        
            alert('La altura ingresada no es correcta')
        }
    } while (isNaN(altura) || altura === 0)

    let imc = indiceMasaCorporal(peso,altura)
    alert(' el IMC es: ' + imc)
    numero++
    

}
 