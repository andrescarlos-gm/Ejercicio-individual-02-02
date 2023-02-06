//base de datos inicial

var usuario =
[{ nombre: 'Pamela', edad: '21', rut: '2344234', diagn: 'Fiebre uterina' },
{ nombre: 'Peluca', edad: '33', rut: '4234', diagn: 'Gripe' },
{ nombre: 'Pedro', edad: '55', rut: '52352', diagn: 'Infeccion urinaria' },
{ nombre: 'Paola', edad: '34', rut: '52352', diagn: 'Estress' },
{ nombre: 'Piero', edad: '76', rut: '7564', diagn: 'Psicosis' }]

//Funcion para crear nuevo objeto de la clase 'Usuario'

function agregarUsuario(nombre, rut, edad, diagn) {
    let nomb = nombre;
    let ru = rut;
    let age = edad;
    let dgn = diagn
    usuario.push({ nombre: nomb, edad: age, rut: ru, diagn: dgn });
}

//Items added to array

var persona1 = new agregarUsuario('Carlos', '33', '17163102-5', 'Gripe');
var persona2 = new agregarUsuario('Josefa', '25', '20122345-3', 'Sarna');
var persona3 = new agregarUsuario('Juan', '28', '19456345-3', 'Malaria');
var persona4 = new agregarUsuario('Daniela', '50', '8928876-2', 'Esguince');
var persona5 = new agregarUsuario('Ignacio', '40', '10456345-5', 'Tetanos');

// Show Users

function showUsers() {
    for (var i = 0; i < usuario.length; i++) {
        console.log("Nombre: " + usuario[i].nombre);
        console.log("Edad: " + usuario[i].edad);
        console.log("Rut: " + usuario[i].rut);
        console.log("Diagnóstico: " + usuario[i].diagn);
    }
}

 function filterItems(arr, query) {
     return arr.filter((obj) => obj.nombre.toLowerCase().includes(query.toLowerCase()));
 }
 console.log(filterItems(usuario, "ap"));