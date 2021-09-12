
function obtenerPromedio(calificaciones) {

    /**Reduce */
    var sumaTotal = calificaciones.reduce ((acumulador, calificacion) =>{
        return acumulador + calificacion

    })
    var promedio = sumaTotal / calificaciones.length
    console.log(promedio);
}

obtenerPromedio([2,5,8,9,10,10,20,1])