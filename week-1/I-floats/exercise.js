var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfMentors + numberOfStudents


var porcentajeE = (numberOfStudents * 100) / total; 

var porcentajeM = (numberOfMentors * 100) / total;

var redondeoE = Math.round(porcentajeE)

var redondeoM = Math.round(porcentajeM)

mensaje1 = 'porcentaje de estudiantes es :' +  redondeoE + '%'
mensaje2 = 'porcentaje de profesores es : ' + redondeoM + '%'


console.log( mensaje1);
console.log(mensaje2);