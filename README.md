# Curso de Introducción a la Programación con JavaScript

Este repositorio contiene los ejercicios prácticos organizados por semanas y clases del curso **"Introducción a la Programación con JavaScript"**. Los ejercicios se ejecutan en Node.js y están diseñados para personas sin experiencia previa en programación.

## Índice

- [Estructura del repositorio](#📁-estructura-del-repositorio)
- [Contenido del curso](#📚-contenido-del-curso)
- [Requisitos](#🛠️-requisitos)
- [Cómo ejecutar un ejercicio](#▶️-cómo-ejecutar-un-ejercicio)
- [¿Cómo comenzar?](#🚀-¿cómo-comenzar)
- [Cómo trabajar con los ejercicios](#💻-cómo-trabajar-con-los-ejercicios)
- [Subir tus cambios](#📥-subir-tus-cambios)
- [Cómo actualizar tu fork con lo último del curso](#🔄-cómo-actualizar-tu-fork-con-lo-último-del-curso)
- [¿Qué hacer si aparecen conflictos al actualizar el fork?](#🧩-¿qué-hacer-si-aparecen-conflictos-al-actualizar-el-fork)
- [Recomendaciones](#🙌-recomendaciones)
- [Licencia](#📄-licencia)
- [Contacto](#📧-contacto)

## 📁 Estructura del repositorio

```
├── helpers # Funciones reutilizables, como la entrada por consola
│   └── input.js
├── semana1 # Ejercicios y tareas de la semana 1
│   ├── clase1_tarea.js
│   ├── clase2_tarea.js
│   ├── clase3_tarea.js
│   ├── clase4_tarea.js
│   ├── ejercicio1.js
│   ├── ejercicio2.js
│   ├── ejercicio3.js
│   ├── ejercicio4.js
│   └── package.json
├── semana2 # (Ejercicios por agregar)
├── semana3
└── semana4
```

## 📚 Contenido del curso

- **Semana 1**: Fundamentos de JS.
  - **Clase 1**: Variables y tipos de datos
  - **Clase 2**: Operadores y condicionales
  - **Clase 3**: Funciones básicas
  - **Clase 4**: Prácticas con lógica
- **Semana 2**: Funciones, arreglos y objetos.
- **Semana 3**: Estructuras de datos, bucles y manejo de errores.

## 🛠️ Requisitos

Asegúrate de tener instaladas las siguientes herramientas:

- 🟢 **Node.js LTS**: [Descargar Node.js](https://nodejs.org/en)
- 🖥️ **Visual Studio Code**: [Descargar VS Code](https://code.visualstudio.com/)
- 🍃 **MongoDB Community Edition**: [Descargar MongoDB](https://www.mongodb.com/try/download/community)
- 🐙 **Git**: [Descargar Git](https://git-scm.com/)

### 💻 Terminales Recomendadas

- **Windows**: [Cmdr](https://cmder.app/)
- **Mac**: [iTerm2](https://iterm2.com/), [Oh My Zsh](https://ohmyz.sh/), [Warp](https://www.warp.dev/)

## ▶️ Cómo ejecutar un ejercicio

1. Abre la terminal y navega a la carpeta `semana1`:

   ```bash
   cd semana1
   ```

2. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

3. Ejecuta el archivo que quieras probar:

   ```bash
   node ejercicio1.js
   ```

## 🚀 ¿Cómo comenzar?

### 1. Haz un fork de este repositorio

Haz clic en el botón **"Fork"** en la parte superior derecha de esta página para copiar el repositorio a tu cuenta de GitHub.

### 2. Clona tu fork en tu computadora

```bash
git clone https://github.com/tu-usuario/2025-2-Javascript.git
cd 2025-2-Javascript
```

## 💻 Cómo trabajar con los ejercicios

Cada clase tiene su archivo con nombre descriptivo.

Puedes modificar y probar los ejercicios en Visual Studio Code.

Para ejecutar un archivo:

```bash
node semana1/ejercicio1.js
```

## 📥 Subir tus cambios

Una vez que termines un ejercicio o tarea:

```bash
git add .
git commit -m "Resuelvo tarea de la clase X"
git push origin main
```

Sube tus avances a tu fork para que quede registrado tu trabajo.

## 🔄 Cómo actualizar tu fork con lo último del curso

1. Agrega el repositorio de la clase como remoto (solo una vez):

   ```bash
   git remote add upstream https://github.com/Inadaptados/2025-2-Javascript.git
   ```

2. Descarga los últimos cambios del repositorio original:

   ```bash
   git fetch upstream
   ```

3. Fusiona los cambios en tu rama principal:

   ```bash
   git merge upstream/main
   ```

4. Sube los cambios actualizados a tu fork:

   ```bash
   git push origin main
   ```

✅ Así te aseguras de tener siempre los últimos ejercicios y prácticas disponibles.

## 🙌 Recomendaciones

- No borres ni sobrescribas tu fork.
- Haz pull frecuentemente para estar al día.
- Guarda tus avances y practica con calma.

## 🧩 ¿Qué hacer si aparecen conflictos al actualizar el fork?

A veces, al fusionar (merge) los cambios del repositorio original, Git no puede decidir automáticamente qué código conservar. Eso se llama conflicto. Aquí te explicamos cómo resolverlo:

### 👣 Pasos para resolver conflictos y conservar tus cambios

1. Después de hacer `git merge upstream/main`, Git te avisará si hay conflictos en algún archivo.

Por ejemplo, podrías ver algo como esto:

Cuando ejecutas:

```bash
git merge upstream/main
```

es posible que aparezcan mensajes como:

```bash
CONFLICT (content): Merge conflict in semana1/ejercicio1.js
Automatic merge failed; fix conflicts and then commit the result.
```

Esto significa que hay diferencias entre tu versión del archivo y la versión nueva del curso.

✅ Pasos para resolver conflictos manteniendo tus propios cambios

1. Abre el archivo que tiene conflicto con Visual Studio Code y este te marcará el archivo con algo como esto:

```javascript
<<<<<<< HEAD
// Tu versión (la que ya tenías)
const resultado = "Mi versión del ejercicio";
=======
// Nueva versión (del contenido original del curso)
const resultado = "Versión nueva del curso";
>>>>>>> upstream/main
```

2. Elige cuál parte conservar
   En este caso, quieres conservar tu versión. Borra lo que no necesitas y deja tu código limpio:

```javascript
// Tu versión (la que ya tenías)
const resultado = "Mi versión del ejercicio";
```

3. Guarda el archivo
4. Asegúrate de revisar todos los archivos con conflictos.
5. Marca el conflicto como resuelto y haz commit

```bash
git add .
git commit -m "Resuelvo conflictos"
```

6. Finalmente sube tus cambios a tu fork

```bash
git push origin main
```

Ahora tu fork está actualizado y listo para seguir trabajando.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 📧 Contacto

[Inadaptados](https://github.com/Inadaptados/2025-2-Javascript)

### ✅ Consejo final

Si tienes dudas al resolver conflictos, consulta con el equipo o revisa en clase. Es completamente normal que aparezcan cuando muchos estamos trabajando en lo mismo.

¡Mucho éxito y no tengas miedo de equivocarte! Aprender a programar es una aventura. 💪
