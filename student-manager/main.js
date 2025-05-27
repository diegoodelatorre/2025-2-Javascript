"use strict";

let students = [];

// se ejecuta antes de hacer cualquier cosa, es estrictamente lo primera que hace
window.onload = function(){
    const stored = localStorage.getItem("students"); // busca en el localStorage si tenemos ya algunos alumnos agregados para mostrarlos
    // aunque se haya actualizado la página
    if (stored) {
        students = JSON.parse(stored); // Se convierte el string que obtuvimos a un JSON, como lo manejamos el arreglo students
        displayStudents();
        updateAverage();
    }
}

function addStudent() {
    console.log("Add student");
    let name = document.getElementById("nameInput").value.trim();
    let grade = parseFloat(document.getElementById("gradeInput").value);

    const student = {name, grade};
    students.push(student);
    
    saveToLocalStorage();
    displayStudents();
    updateAverage();
}
 
function displayStudents() {
    const list = document.getElementById("studentList");
    list.innerHTML = ``; // se limpia la lista para que cuando recorra otra vez la lista no duplique los que ya mostró, si no que empiece
    // otra vez para mostrar solo una vez cada elemento

    for (let i = 0; i < students.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `
        <p>${students[i].name} - ${students[i].grade}</p>
        `;
        list.appendChild(li);
    }
}

function updateAverage() {
    if (students.length === 0) {
        return;
    }
    let total = 0;
    for (let i = 0; i < students.length; i++) {
        total += students[i].grade;
    }
    let average = total/students.length;

    document.getElementById("averageDisplay").textContent = `Average Grade: ${average}`;
}

function saveToLocalStorage(){
    console.log(JSON.stringify(students));
    localStorage.setItem("students", JSON.stringify(students)); // stringify convierte a string el arreglo porque localStorage
    // solo permite un string
    
}