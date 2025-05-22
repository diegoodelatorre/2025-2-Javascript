"use strict";

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span onclick="toggleComplete(this)">${taskText}</span>
      <div class="task-buttons">
        <button onclick="deleteTask(this)">Delete</button>
      </div>
    `;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}

function deleteTask(btn){
  btn.closest("li").remove(); // closest eliminar la etiqueta más cercana del tipo que le especifiquemos, en este caso li
}

function toggleComplete(span){
  span.classList.toggle("task-complete"); // El toggle lo que hace es agregar una clase a la etiqueta que digamos, si ya le tiene la quita
  // Una vez con esta clase obtiene los estilos para esa clase que hace ver que la tarea está completada
}