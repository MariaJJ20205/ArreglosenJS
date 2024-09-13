// FUNCIONES TIPO FLECHA

//Cero parámetros

const saludo = () => 'Hola, bienvenido';
console.log(saludo());


//Un parámetro

const nombre = nombre => `${saludo()} nombre ${nombre}`;
console.log(nombre(Pedro));

//Dos parámetros

const promedio = (num1, num1) => num1/num2;

const sumaTres = (num1, num2, num3) => (num1+num2)*num3;

const totall = (num1, num2, num3) => promedio(num1, num2) + sumaTres(num1, num2, num3)

//ARREGLOS

//Arreglo 1

const notas = [1,2.5, 5, 5, 5]

// Arreglo con reduce

notas.reduce((suma, cantidad) =>{
    return suma / cantidad
})

// Arreglo con foreach

let comodin = 2;

notas.forEach(promedio =>{
    promedio+comodin
})

// Arreglo con map

let mapeo = notas.map(nota =>{
    return nota + comodin
})

// Arreglo con filter

let filtrar = notas.filter(nota =>{
    return nota > 3
})
 //--------------------------------------------------------------------------------------------

//Arreglo 2

const sabores = ['Vainilla', 'Chocolate', 'Arequipe','Vainilla']

// Arreglo con reduce

sabores.reduce((sabor_fav) =>{
    if (saborfav === 'Vainilla') {
        return cantidad + 1;
      }
})

// Arreglo con foreach

let adicion ='Con topping';

sabores.forEach(sabor, adicion =>{
    if (sabor==='Arequipe'){
        return sabor + adicion
    }
})

// Arreglo con map

let map = sabores.map(sabor =>{
    return 'El sabor es '+ sabor
})

// Arreglo con filter

let filtro = sabores.filter(sabor =>{
    return sabores.lend() > 3
})

//--------------------------------------------------------------------------------------------

 //Arreglo 3

const puntuacion = [0, 0 , 1]

// Arreglo con reduce

const comodin2 = 2
puntuacion.reduce((comodin2, puntaje) =>{
    return puntaje * puntuacion[comodin2]
})

// Arreglo con foreach

puntuacion.forEach(promedio, valor=>{
     return valor * promedio
    
})

// Arreglo con map

let mape = puntuacion.map(puntoss =>{
    return 'El puntaje es ' +(puntoss+1)
})

// Arreglo con filter

let filt = puntuacion.filter(valoracion =>{
    return valoracion>1
})

//--------------------------------------------------------------------------------------------

//Arreglo 4

const mezcla = ['Vainilla', 42, 'Chocolate', 8,'Arequipe', 7, 'Fresa', 100];

// Arreglo con reduce

const comodin3 = 2
mezcla.reduce((comodin3, ventas ) =>{
    return ventas * comodin2
})

// Arreglo con foreach

mezcla.forEach(cantidad=>{
     return cantidad +2
    
})

// Arreglo con map

let mapee = mezcla.map(puntoss =>{
    return 'El puntaje es ' +(mezcla[2] +puntoss)
})

// Arreglo con filter

let filte = mezcla.filter(valoracion =>{
    return mezcla[valoracion]
})