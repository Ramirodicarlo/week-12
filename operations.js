//1

const texto = (texto) => {
  return texto
}

//2

const suma = (sumandoA, sumandoB) => {
  return sumandoA + sumandoB;
}

//3

const resta = (minuendo, sustraendo) => {
  return minuendo - sustraendo;
}

//4

const multiplicacion = (factorA, factorB) => {
  return factorA * factorB;
}

//5

const division = (dividendo, divisor) => {
  if  ( divisor === 0)  {
    return 'No se puede dividir por 0';
  } else  {
    return dividendo / divisor;
  }
}

//6

const tablaMultiplicar = (multiplicando, multiplicador) => {
 if (multiplicador === undefined) multiplicador = 10;
 let table = []
 for (let i = 0; i <= multiplicador; i++){
   table.push(multiplicando * i)
 }
return table
}

//7

const potencia = (base, exponente) => {
  return Math.pow(base, exponente)
}

//8

const anidada = (a,b) => {
  function cuadrado(x) {
    return x * x;
  }
  return cuadrado(a) + cuadrado(b);
}

//9

const cerosIzq = (num, totalLength) => {
  var numStr = num.toString();
  var numCeros = totalLength - numStr.length;
  for (var i = 1; i <= numCeros; i++) {
      numStr = "0" + numStr;
  }
  return numStr;
}

export{
  texto,
  suma,
  resta,
  multiplicacion,
  division,
  tablaMultiplicar,
  potencia,
  anidada,
  cerosIzq,
}