
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

var nacionalidades = ["mexicano","argentino","argentino","venezolano","peruano","mexicano","argentino","peruano","venezolano"];

function clasificarnacionalidades(nacionalidades) {
            
    var mexicanos =0;
    var argentinos =0;
    var venezolanos =0;
    var peruanos =0;


    nacionalidades.forEach( (nacionalidad) => {
        if (nacionalidad == "mexicano") {
            contadormexicanos = mexicanos+1;
        }
        if (nacionalidad == "argentino") {
            contadorargentinos= argentinos+1;
        }       
        if (nacionalidad == "venezolano") {
            contadorvenezolanos = venezolanos+1;
        }
        if (nacionalidad == "peruano") {
            contadorperuanos = peruanos+1;
        }

    })

    
    console.log('mexicanos:' + contadormexicanos);
    console.log('venezolanos:' + contadorvenezolanos);
    console.log('argentinos:' + contadorargentinos);
    console.log('peruanos:' + contadorperuanos);
}
clasificarnacionalidades(nacionalidades);

/*
var totaldepersonas = personas.reduce ((acumulador, personas) =>{
    return acumulador + personas

})
    
    console.log(totaldepersonas);


obtenerPromedio([2,5,8,9,10,10,20,1])*/


