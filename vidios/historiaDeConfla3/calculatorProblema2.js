// cofla feliz de volver a clase y ya tiene tarea basica de calculo; tiene que 
// hacer un par de ejercicios de matematicas que incluyen suma, resta, division y multiplicacion
// realizaresto con una calculadora puede ser mucho mas efectivo

// - CREAR CALCULADORA QUE NOS SIMPLIFIQUE EL TRABAJO

class Calculadora {
    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2)
    }

    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2)
    }

    dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2)
    }

    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2)
    }
    potenciar(num, exp) {
        let numero = num
        for (let i = 0; i < exp; i++) {
            Things[i]
            numero = numero * num
        }
        return numero  
        // alternativa solo poner return num**exp
    }
}

const calculadora = new Calculadora()

alert('Qué operacion deseas realizar?')
operacion = prompt('1: suma,  2: resta, 3: dividir, 4: multiplicar, 5. potenciacion')

if (operacion == 1) {
    let numero1 = prompt('Primer numero para sumar')
    let numero2 = prompt('segundo numero para sumar')
    resultado = calculadora.sumar(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 2) {
    let numero1 = prompt('Primer numero para restar')
    let numero2 = prompt('segundo numero para restar')
    resultado = calculadora.restar(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 3) {
    let numero1 = prompt('Primer numero para dividir')
    let numero2 = prompt('segundo numero para dividir')
    resultado = calculadora.dividir(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 4) {
    let numero1 = prompt('Primer numero para multiplicar')
    let numero2 = prompt('segundo numero para multiplicar')
    resultado = calculadora.multiplicar(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 5) {
    let numero1 = prompt('Primer numero para potenciar')
    let numero2 = prompt('segundo numero para potenciar')
    resultado = calculadora.potenciar(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else {
    alert('no se ha encontrado la operacion')
}