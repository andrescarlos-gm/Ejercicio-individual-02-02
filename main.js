class Consultorio {
    constructor(consult, nombre) {
        super(nombre);
        this.nombre = nombre;
        this.consult = consult;
    }
}


class Paciente extends Consultorio{
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

    

}






// var obj = {};

// return obj;
// }
// function CreateNewConsult(nombreConsult){
//     var obj2 = {};
//     obj2.nombreConsult = nombreConsult
// }

// var persona1 = CreateNewPatient('Carlos','33', '17163102-5','Gripe');
// var persona2 = CreateNewPatient('Josefa','25', '20122345-3', 'Sarna');
// var persona3 = CreateNewPatient('Juan','28', '19456345-3', 'Malaria');
// var persona4 = CreateNewPatient('Daniela','50', '8928876-2', 'Esguince');
// var persona5 = CreateNewPatient('Ignacio', '40', '10456345-5', 'Tetanos');
