
const { ask } = require('../helpers/input');

async function main() {

  const personas = [
    {
      nombre: "Rodrigo",
      edad: 36,
      profesion: "Desarrollador",
      hobbies: ["nadar", "futbol", "leer"],
      birthDate: "1988-08-08",
      saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre} `);
      }
    },
    {
      nombre: "Claudia",
      edad: 36,
      profesion: "Desarrollador",
      hobbies: ["nadar", "futbol", "leer"],
      birthDate: "1988-08-08",
      saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre} `);
      }
    },
    {
      nombre: "Heriberto",
      edad: 36,
      profesion: "Desarrollador",
      hobbies: ["nadar", "futbol", "leer"],
      birthDate: "1988-08-08",
      saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre} `);
      }
    },
  ];

  const alumno1 = {
    nombre: "Yei Yei",
    matricula: "AL089778",
    promedio: 90,
    edad: 18,
    mostrarInfo: function () {
      console.log(`Nombre: ${this.nombre}| \nMatricula: ${this.matricula}| \nPromedio: ${this.promedio}|`);
      if (this.edad >= 18) {
        console.log("Es mayor de edad");
      } else {
        console.log("No es mayor de edad");
      }
    }
  }

  const alumno2 = {
    nombre: "Frank",
    matricula: "AL089790",
    promedio: 95,
    edad: 17,
    mostrarInfo: function () {
      console.log(`Nombre: ${this.nombre}| \nMatricula: ${this.matricula}| \nPromedio: ${this.promedio}|`);
      if (this.edad >= 18) {
        console.log("Es mayor de edad");
      } else {
        console.log("No es mayor de edad");
      }
    }
  }

  const alumno3 = {
    nombre: "Cris",
    matricula: "AL089767",
    promedio: 98,
    edad: 21,
    mayorDeEdad: false,
    mostrarInfo: function () {
      console.log(`Nombre: ${this.nombre}| \nMatricula: ${this.matricula}| \nPromedio: ${this.promedio}|`);
      if (this.edad >= 18) {
        console.log("Es mayor de edad");
      } else {
        console.log("No es mayor de edad");
      }
    },
    setMayorEdad: function () { // setMayorEdad es un setter que se usa para establecer el valor de mayorDeEdad
      // this.mayorDeEdad = this.edad >= 18 ? true : false;
      if (this.edad >= 18) {
        this.mayorDeEdad = true;
      } else {
        this.mayorDeEdad = false;
      }
    }
  }

  const alumnos = [alumno1, alumno2, alumno3];

  for (let i = 0; i < alumnos.length; i++) {
    alumnos[i].mostrarInfo();
  }

  // alumno1.mostrarInfo();
  // alumno2.mostrarInfo();
  // alumno3.mostrarInfo();
}

main();

/* Ejercicio que hicimos en clase 
const { ask } = require('../helpers/input');

async function main(){
    const personas = [
        {
            nombre: 'Claudia',
            edad: 34,
            profesion: 'Desarrollador',
            saludar: function (){
                console.log(`Hola mi nombre es ${this.nombre}`);
            }
        },
        {
            nombre: 'Carlos',
            edad: 28,
            ocupacion: 'Estudiante',
            saludar: function (){
                console.log(`Hola mi nombre es ${this.nombre}`);
            }
        }
    ];

    personas[0].saludar();
    personas[1].saludar();

    for (let i = 0; i < personas.length; i++) {
        personas[i].saludar();
    }

    const alumno = {
        nombre: "Yei Yei",
        edad: 18,
        ocupacion: "Estudiante",
        esMayorDeEdad: function (){
            if (this.edad >= 18) { return true;}
            else {return false;}
        },
        mostrarInfo: function(){
            console.log(`Hola soy ${this.nombre}, tengo ${this.edad}, me dedico a ser: ${this.ocupacion}`);
            if (this.esMayorDeEdad) {
                console.log("y soy mayor de edad");
            } else {
                console.log("no puedo votar");
            }
        }
    };

    console.log(alumno.mostrarInfo());
}

main();
*/