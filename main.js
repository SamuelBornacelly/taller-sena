
//* --- Problema propuesto #1 ---

function calcular(figuraGeometrica, areaPerimetro, unidadMedida) {

  //? Se eliminan las posibles inconsistencias en los datos ingresados
  const reemplazos = {"á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u"};
  const figuraGeometricaNormalizar = figuraGeometrica.toLowerCase().replace(/[áéíóú]/g, vocal => reemplazos[vocal]);
  const areaPerimetroNormalizar = areaPerimetro.toLowerCase().replace(/[áéíóú]/g, vocal => reemplazos[vocal]);
  
  //? Cálculo de perímetros
  if(figuraGeometricaNormalizar === "triangulo" && areaPerimetroNormalizar === "perimetro") {
      const perimetro = arguments[3] + arguments[4] + arguments[5];
      return "El perímetro del Triángulo es: " + perimetro + " " + unidadMedida;
  } else if(figuraGeometricaNormalizar === "rectangulo" && areaPerimetroNormalizar === "perimetro") {
    const perimetro = (arguments[3] + arguments[4]) * 2;
    return "El perímetro del Rectángulo es: " + perimetro + " " + unidadMedida;
  } else if(figuraGeometricaNormalizar === "cuadrado" && areaPerimetroNormalizar === "perimetro") {
    const perimetro = arguments[3] * 4;
    return "El perímetro del Cuadrado es: " + perimetro + " " + unidadMedida;
  } else if(figuraGeometricaNormalizar === "circulo" && areaPerimetroNormalizar === "perimetro") {
    const perimetro = 2 * 3.14 * arguments[3];
    return "El perímetro del Cuadrado es: " + perimetro + " " + unidadMedida;
  }

   //? Cálculo de áreas
  else if(figuraGeometricaNormalizar === "triangulo" && areaPerimetroNormalizar === "area") {
      const area = (arguments[3] + arguments[4]) / 2;
      return "El área del Triángulo es: " + area + " " + unidadMedida;
  } else if(figuraGeometricaNormalizar === "rectangulo" && areaPerimetroNormalizar === "area") {
    const area = arguments[3] * arguments[4];
    return "El área del Rectángulo es: " + area + " " + unidadMedida;
  } else if(figuraGeometricaNormalizar === "cuadrado" && areaPerimetroNormalizar === "area") {
    const area = arguments[3] * arguments[3];
    return "El área del Cuadrado es: " + area + " " + unidadMedida;
  } else if(figuraGeometricaNormalizar === "circulo" && areaPerimetroNormalizar === "area") {
    const area = 3.14 * (arguments[3]*arguments[3]);
    return "El área del Cuadrado es: " + area + " " + unidadMedida;
    
    //? Si los datos ingresados no son válidos se mostrará el siguiente mensaje
  } else {
    return "Los datos ingresados no son válidos, por favor verifíquelos";
  }
}
//? Prueba de cálculo del perímetro de las figuras geométricas propuestas
// console.log(calcular("Triángulo", "Permetro", "Cm", 2, 4, 5));

// console.log(calcular("rectangulo", "perímetro", "Mts", 30, 15));

// console.log(calcular("Cuadrado", "perimetro", "Km", 40));

// console.log(calcular("Circulo", "Hola", "cm", 10));

//? Prueba de cálculo del área de las figuras geométricas propuestas
// console.log(calcular("Triángulo", "Área", "Cm", 2, 4, 5));

// console.log(calcular("rectangulo", "área", "Mts", 30, 15));

// console.log(calcular("Cuadrado", "area", "Km", 40));

// console.log(calcular("Adiós", "areá", "cm", 10));


//* --- Problema propuesto #2 ---

function edades(arr) {

  //? Se comprueba que los valores ingresados se encuentren en el rando de 0 a 120
  let edadErronea = {"comprobacion": arr.filter(edad => edad > 120 || edad < 0),"edad": 0, "posicion": 0};
  if (edadErronea.comprobacion != "") {
    arr.filter(edad => edad > 120 || edad < 0 ? ((edadErronea.edad = edad), (edadErronea.posicion = arr.indexOf(edad) + 1)) : "")
    return "La edad " + edadErronea.edad + " en la posición " + edadErronea.posicion + " del arreglo es errónea. Por favor ingrese un valor diferente";
  }

  //? Se clasifican los datos y se guardan en un objeto
  const edadesOrdenadas = arr.sort((a, b) => a - b);
  const analisisEdades = {
    menoresEdad: edadesOrdenadas.filter(edad => edad < 18).length,
    mayoresEdad: edadesOrdenadas.filter(edad => edad >= 18).length,
    adultosMayores: edadesOrdenadas.filter(edad => edad >= 60).length,
    edadMasBaja: edadesOrdenadas[0],
    edadMasAlta: edadesOrdenadas[edadesOrdenadas.length - 1]
  };

  return `En el grupo de edades ingresadas:
  - Hay ${analisisEdades.menoresEdad} menores de edad- Hay ${analisisEdades.mayoresEdad} mayores de edad
  - Entre los ${analisisEdades.mayoresEdad} mayores de edad ${analisisEdades.adultosMayores} son adultos mayores
  - La edad más baja es ${analisisEdades.edadMasBaja} años
  - La edad más alta es ${analisisEdades.edadMasAlta} años`
}

// console.log(edades([12, 6, 45, 22, 31, 25, 78, 65, 110, 17]));

// console.log(edades([12, 6, 150, 22, 31, 25, 78, 65, 110, 17]));


//* --- Problema propuesto #3 ---

function arreglosAscendentes(arr1, arr2) {

  //? Se comprueba si el arreglo no contiene más de 5 valores
  if (arr1.length > 5 || arr2.length > 5) {
    return "La cantidad de valores en cada vector no debe ser mayor a 5. Por favor verifique los datos ingresados";
  }

  //? Se comprueba que los valores ingresados se encuentren en orden ascendente
  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
    if (arr1[i] < arr1[i-1]) {
      return "Los valores del primer vector no se encuentran en orden ascendente. Por favor, verifique el orden de los valores ingresados";
    } else if (arr2[i] < arr2[i-1]) {
      return "Los valores del segundo vector no se encuentran en orden ascendente. Por favor, verifique el orden de los valores ingresados";
    }
  }

  //? Se concatenan ambos arreglos y se ordenan para porteriormente ser retornados
  return arr1.concat(arr2).sort((a, b) => a - b);
}

// console.log(arreglosAscendentes([1, 3, 6, 9, 17], [2, 4, 10, 17]));

// console.log(arreglosAscendentes([1, 3, 6, 9, 17, 30], [2, 4, 10, 17]));

// console.log(arreglosAscendentes([1, 6, 3, 9, 17], [2, 4, 10, 17]));

// console.log(arreglosAscendentes([1, 3, 6, 9, 17], [4, 2, 10, 17]));


//* --- Problema propuesto #4 ---

let baseDatos = [];

function guardarDatos(datos) {
  const persona = {
    nombre: datos[0],
    cedula: datos[1],
    fechaNacimiento: datos[2],
    correo: datos[3],
    ciudadResidencia: datos[4],
    ciudadOrigen: datos[5],
  };

  return baseDatos.push(persona);
}

function buscarPersona(documento) {

  //? Se comprueba que el valor ingresado sea un valor válido
  if (typeof(documento) === 'number') {
    return baseDatos.find(persona => persona.cedula === documento) || "La persona con el documento ingresado no se encuentra en la base de datos";
  } else {
    return "Los datos ingresados no son válidos";
  }
}

guardarDatos(["Bruce Wane", 100, "07/04/1915", "batman@gmail.com", "Ciudad Gótica", "Ciudad Gótica", "Aurora", ["I went too far", "Running with the wolf", "Your blood"]]);

guardarDatos(["Shrek", 200, "Dato desconocido", "shrek@gmail.com", "Pantano", "Muy muy lejano", "Lissette chan", ["Yo quiero un héroe"]]);


// console.log(buscarPersona(100));

// console.log(buscarPersona(200));

// console.log(buscarPersona(500));

// console.log(buscarPersona("hola"));