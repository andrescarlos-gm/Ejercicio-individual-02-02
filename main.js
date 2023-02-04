var catalogo =
    [{ _nombre: 'Pamela', _edad: '21', _rut: '2344234', _diagn: 'Fiebre uterina' },
    { _nombre: 'Peluca', _edad: '33', _rut: '4234', _diagn: 'Gripe' },
    { _nombre: 'Pedro', _edad: '55', _rut: '52352', _diagn: 'Infeccion urinaria' },
    { _nombre: 'Paola', _edad: '34', _rut: '52352', _diagn: 'Estress' },
    { _nombre: 'Piero', _edad: '76', _rut: '7564', _diagn: 'Psicosis' }]

class Paciente {

    constructor(nombre, edad, rut, diagn) {
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagn = diagn;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }

    get rut() {
        return this._rut;
    }
    set rut(rut) {
        this._rut = rut;
    }

    get diagn() {
        return this._diagn;
    }
    set diagn(diagn) {
        this._diagn = diagn;
    }
    agregarPaciente() {
        catalogo.push({ _nombre: this._nombre, _edad: this._edad, _rut: this._rut, _diagn: this._diagn });
        console.log(this._nombre)
    }
}
//Se crean nuevas personas
var persona1 = new Paciente('Carlos', '33', '17163102-5', 'Gripe');
var persona2 = new Paciente('Josefa', '25', '20122345-3', 'Sarna');
var persona3 = new Paciente('Juan', '28', '19456345-3', 'Malaria');
var persona4 = new Paciente('Daniela', '50', '8928876-2', 'Esguince');
var persona5 = new Paciente('Ignacio', '40', '10456345-5', 'Tetanos');
// Se agregan nuevas personas al array //
persona1.agregarPaciente();
persona2.agregarPaciente();
persona3.agregarPaciente();
persona4.agregarPaciente();
persona5.agregarPaciente();
// Mostrar todos los datos de los usuarios registrados //
function enlistarUsuarios(){
for (var i = 0; i < catalogo.length; i++) {
    console.log("Nombre: " + catalogo[i]._nombre);
    console.log("Edad: " + catalogo[i]._edad);
    console.log("Rut: " + catalogo[i]._rut);
    console.log("Diagnóstico: " + catalogo[i]._diagn);
}
}