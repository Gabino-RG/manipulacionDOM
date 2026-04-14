# 🚀 DOM Lab: Administrador de Noticias Dinámico

Este proyecto es una práctica avanzada de manipulación del **DOM (Document Object Model)** utilizando JavaScript puro (Vanilla JS). La aplicación permite gestionar un panel de noticias con actualizaciones en tiempo real, estilos dinámicos y persistencia de datos local.

## ✨ Características

### 🔹 Parte A: Interacción Base
- **Actualización de Contenido:** Cambio dinámico de títulos y textos mediante `textContent`.
- **Gestión de Atributos:** Modificación de imágenes (`src`) y atributos de datos (`dataset`).
- **Estados Visuales:** Uso de `classList.toggle` para destacar elementos principales.

### 🔹 Parte B: CRUD de Noticias (Mini CMS)
- **Creación Dinámica:** Generación de elementos de lista (`<li>`) mediante `createElement` y plantillas de cadenas.
- **Inserción Inteligente:** Uso de `unshift` y `appendChild` para el manejo de orden en el flujo.
- **Delegación de Eventos:** Implementación de un único *listener* en el contenedor padre para gestionar acciones de eliminar y destacar, optimizando el uso de memoria.

### 🔹 Parte C: Persistencia y UX
- **LocalStorage:** Los datos se sincronizan automáticamente con el navegador, permitiendo que la información persista tras recargar la página.
- **Interfaz Premium:** Diseño responsivo con CSS moderno (Custom Properties, Glassmorphism, y animaciones de transición).

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica.
- **CSS3:** Variables globales, Flexbox, y efectos de hover avanzados.
- **JavaScript (ES6+):** Manipulación del DOM, Web Storage API y manejo de eventos.

## 🚀 Instalación y Uso

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` directamente en tu navegador o utiliza la extensión **Live Server** en VS Code para una mejor experiencia.
3. ¡Interactúa con el panel! Prueba agregando noticias, marcándolas como favoritas con ⭐ o eliminándolas con 🗑️.

## 🧠 Conceptos Clave Aplicados

### Delegación de Eventos
En lugar de asignar un evento a cada botón de la lista, se utiliza un "escuchador" en el elemento padre (`<ul>`). Gracias al *Event Bubbling*, detectamos exactamente qué botón fue presionado, lo que hace al programa mucho más eficiente y escalable.

### Ciclo de Persistencia
1. **Entrada:** El usuario ingresa datos en el formulario.
2. **Procesamiento:** Se crea un objeto y se añade al arreglo `historialNotas`.
3. **Almacenamiento:** Se ejecuta `sincronizarMemoria()` para actualizar el `localStorage`.
4. **Salida:** Se llama a `pintarLista()` para renderizar visualmente los cambios.

---
Generado para la práctica de Programación Web - 2024.
