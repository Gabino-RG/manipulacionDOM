// 1) Selección de elementos (herramientas DOM)
const titulo = document.querySelector("#titulo");
const nota = document.querySelector("#nota");
const texto = document.querySelector(".nota__texto");
const idInterno = document.querySelector("#idInterno");
const imgNota = document.querySelector("#imgNota");

const btnCambiarTitulo = document.querySelector("#btnCambiarTitulo");
const btnToggleDestacado = document.querySelector("#btnToggleDestacado");
const btnCambiarImagen = document.querySelector("#btnCambiarImagen");

// Selección de elementos Parte B
const formAdd = document.querySelector("#formAdd");
const inputTitulo = document.querySelector("#inputTitulo");
const inputEtiqueta = document.querySelector("#inputEtiqueta");
const listaNoticias = document.querySelector("#listaNoticias");

// 2) Leer contenido y atributos
idInterno.textContent = nota.dataset.id; // lee data-id
console.log("Título actual:", titulo.textContent);
console.log("Clase actual nota:", nota.className);

// 3) Actualizar contenido
btnCambiarTitulo.addEventListener("click", () => {
  titulo.textContent = "Panel de Noticias (Actualizado)";
});

// 4) Actualizar características (clases/atributos/estilos)
btnToggleDestacado.addEventListener("click", () => {
  nota.classList.toggle("destacada");
});

// 5) Cambiar atributo src (ejemplo real)
btnCambiarImagen.addEventListener("click", () => {
  const nueva =
    "https://upload.wikimedia.org/wikipedia/commons/4/43/The_Earth_seen_from_Apollo_17_with_transparent_background.png";
  imgNota.setAttribute("src", nueva);
  texto.textContent = "La imagen y el texto fueron actualizados desde el DOM.";
});

// --- PARTE B y C (Persistencia Simple) ---
let historialNotas = JSON.parse(localStorage.getItem("app_notas_guardadas")) || [];

function sincronizarMemoria() {
  localStorage.setItem("app_notas_guardadas", JSON.stringify(historialNotas));
}

function pintarLista() {
  listaNoticias.innerHTML = "";

  historialNotas.forEach((item) => {
    const nodoLi = document.createElement("li");
    nodoLi.classList.add("card-noticia");
    
    if (item.destacada) {
      nodoLi.classList.add("resaltado");
    }

    // Dataset para vincular DOM con el Array
    nodoLi.dataset.clave = item.id;

    nodoLi.innerHTML = `
      <div class="bloque-texto">
        <h3 class="titular">${item.titulo}</h3>
        <span class="badge-tag">${item.etiqueta}</span>
      </div>
      <div class="caja-botones">
        <button type="button" class="btn-accion btn-fav" aria-label="Destacar">⭐</button>
        <button type="button" class="btn-accion btn-quitar" aria-label="Eliminar">🗑️</button>
      </div>
    `;

    // Añadir al DOM
    listaNoticias.appendChild(nodoLi);
  });
}

// Ejecución inicial al abrir la página
pintarLista();

// 6) Crear y agregar elementos dinámicos
formAdd.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const textoTitulo = inputTitulo.value.trim();
  const textoTag = inputEtiqueta.value.trim();

  if (!textoTitulo || !textoTag) return;

  const objetoNoticia = {
    id: Date.now().toString(),
    titulo: textoTitulo,
    etiqueta: textoTag,
    destacada: false,
  };

  // Meter al principio del arreglo
  historialNotas.unshift(objetoNoticia);
  sincronizarMemoria();
  pintarLista();

  // Resetear inputs
  inputTitulo.value = "";
  inputEtiqueta.value = "";
  inputTitulo.focus();
});

// 7) Eliminar o interactuar (Delegación de eventos)
listaNoticias.addEventListener("click", (evento) => {
  const clickBorrar = evento.target.closest(".btn-quitar");
  const clickFav = evento.target.closest(".btn-fav");

  if (clickBorrar || clickFav) {
    evento.stopPropagation(); // Evita bugs visuales
  }

  const tarjetaPadre = evento.target.closest(".card-noticia");
  if (!tarjetaPadre) return;

  const claveId = tarjetaPadre.dataset.clave;

  // Acción de eliminar
  if (clickBorrar) {
    historialNotas = historialNotas.filter((elemento) => elemento.id !== claveId);
    sincronizarMemoria();
    pintarLista();
  }

  // Acción de destacar
  if (clickFav) {
    const elementoUbicado = historialNotas.find((elemento) => elemento.id === claveId);
    if (elementoUbicado) {
      elementoUbicado.destacada = !elementoUbicado.destacada;
      sincronizarMemoria();
      pintarLista();
    }
  }
});