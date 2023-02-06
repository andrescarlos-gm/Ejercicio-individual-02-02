
var usuario =
[{ nombre: 'Pamela', edad: '21', rut: '2344234', diagn: 'Fiebre uterina' },
{ nombre: 'Peluca', edad: '33', rut: '4234', diagn: 'Gripe' },
{ nombre: 'Pedro', edad: '55', rut: '52352', diagn: 'Infeccion urinaria' },
{ nombre: 'Paola', edad: '34', rut: '52352', diagn: 'Estress' },
{ nombre: 'Piero', edad: '76', rut: '7564', diagn: 'Psicosis' }]

//Funcion para crear nuevo objeto de la clase 'Usuario'

function agregarUsuario(nombre, rut, edad, diagn) {
    formNombre=this.nombre
    formRUT=this.rut
    formEdad=this.edad
    this.diagnostico = [];
    usuario.push({ nombre: this.nombre, edad: this.edad, rut: this.rut, diagn: this.diagn });
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

















//This function create a new object from the class 'Consultorio'

let listaConsultorios = [];
function Consultorio(nombre) {
    this.nombre = nombreConsultorio;
    this.paciente = [];
}

function agregarConsultorio() {
    nombreConsultorio = document.querySelector('#input-consultorio').value;
    validator = true;

    listaConsultorios.forEach(element => {
        if (element.nombre == nombreConsultorio) {
            validator = false;
        }
    })
}
if (validator) {
    nombreConsultorio = new Consultorio(nombreConsultorio);
    listaConsultorios.push(nombreConsultorio);
    selectCesfam.selectedIndex = -1;
    renderDOM();
    respaldoLocal();


} else {
    alert('Este consultorio ya existe');
}


