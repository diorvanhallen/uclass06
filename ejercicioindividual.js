
/**Ejercicio individual 1 

var cositas = (['uno', 2,null,0])
    console.log (cositas);


cositas.forEach(Element => console.log (Element));

/**ejercicio individual 2 */
/* con for 

function aprobadas(calificaciones) {
    for (var i=0;i<calificaciones.length;i++) {
        if (calificaciones[i] >= 60) {
        console.log(calificaciones[i]);
        }
    }
}
aprobadas = ([50,80,100,69,70,10])
aprobadas = ([90,90,50,45,100,80])

/* ejercicio 3 */

/*
var nacionalidades = ["mexicano","argentino","argentino","venezolano","peruano","mexicano","argentino","peruano","venezolano"];

function clasificarnacionalidades(nacionalidades) {
            
    var mexicanos =0;
    var argentinos =0;
    var venezolanos =0;
    var peruanos =0;


    nacionalidades.forEach( (nacionalidad) => {
        if (nacionalidad == "mexicano") {
            mexicanos = mexicanos+1;
        }
        if (nacionalidad == "argentino") {
            argentinos= argentinos+1;
        }       
        if (nacionalidad == "venezolano") {
            venezolanos = venezolanos+1;
        }
        if (nacionalidad == "peruano") {
            peruanos = peruanos+1;
        }

    })

    
    console.log('mexicanos:' + mexicanos);
    console.log('venezolanos:' + venezolanos);
    console.log('argentinos:' + argentinos);
    console.log('peruanos:' + peruanos);
}
clasificarnacionalidades(nacionalidades);
/*

/* INTENTO MIO

var nacionalidades = ["mexicano","argentino","argentino","venezolano","peruano","mexicano","argentino","peruano","venezolano"];
    var contador=0

    var cantidaddemexicanos = nacionalidades.reduce((contador,mexicano) => {
        if(mexicano === "mexicano")
        return contador+1;
        
    })
    console.log(cantidaddemexicanos);
/*
    var mexicanos =0;
    var argentinos =0;
    var venezolanos =0;
    var peruanos =0;

function contarrepetidos(nacionalidades){
    var cantidades= {}

    arreglo.foreach(function(x){[x]=(cantidades[x] || 0=+1;)});
    console.log(cantidades);
       
    nacionalidades = (["mexicano","argentino","argentino","venezolano","peruano","mexicano","argentino","peruano","venezolano"]);
*/

// ejercicio de tarea 
/*

let numero = [2,3,4,5,6,7,8,9,10];

    let pares = numero.filter(function(num){
      return num % 2 !== 0;
    });
    //nuevo array con los numeros pares
    console.log(pares);

// ejercicio de tarea 2 //

var tabla=5;
for (var i = 1; i< 11; i++) {
console.log(tabla + 'x' + i + '=' + (tabla * i))

}

var tabla=9;
for (var i = 1; i< 11; i++) {
console.log(tabla + 'x' + i + '=' + (tabla * i))

}


*/ otro ejercicio */
var ordenar=([1, 2, 45, 5, 6, 3, 1, 8])
var ordenar=([100, 5, 5, 8, 3, 7, 8])

ordenar.sort();
