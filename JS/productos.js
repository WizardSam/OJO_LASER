// Para agregar un producto, guarda su imagen en assets/Productos y añade un objeto al arreglo.
const productos = [
  {
    nombre: "Portaretrato de madera",
    imagen: "assets/Productos/tomi.png",
    descripcion: "Portarretrato de madera para fotos",
  },
  {
    nombre: "Mr DOOM",
    imagen: "assets/Productos/D1.png",
    descripcion: "Llavero verde con máscara y letras DOOM",
  },
  {
    nombre: "Broly",
    imagen: "assets/Productos/D2.png",
    descripcion: "Pieza de personaje de anime con cabello y botas amarillas",
  },
  {
    nombre: "Calavera",
    imagen: "assets/Productos/D3.png",
    descripcion: "Pieza en forma de calavera con grabado en blanco y negro",
  },
  {
    nombre: "FNAF",
    imagen: "assets/Productos/D4.png",
    descripcion: "Pieza de músico con instrumento amarillo en estilo pixel art",
  },
  {
    nombre: "Billie Eilish",
    imagen: "assets/Productos/D5.png",
    descripcion: "Pieza rectangular con retrato y nombre de Billie Eilish",
  },
  {
    nombre: "Hamster watoncito",
    imagen: "assets/Productos/D6.png",
    descripcion: "Pieza de personaje blanco con gorra azul y paleta de colores",
  },
  {
    nombre: "Pomni",
    imagen: "assets/Productos/D7.png",
    descripcion:
      "Pieza circular de Pomni con traje y gorro de bufón en rojo y azul",
  },
  {
    nombre: "Gatito con placa",
    imagen: "assets/Productos/D8.png",
    descripcion:
      "Llavero de madera con un gatito grabado sobre una placa rectangular",
  },
  {
    nombre: "Máscara de Majora",
    imagen: "assets/Productos/D9.png",
    descripcion:
      "Pieza de la máscara de Majora pintada en morado, rojo y amarillo",
  },
  {
    nombre: "Helldiver Corps",
    imagen: "assets/Productos/D10.png",
    descripcion:
      "Pieza circular con calavera azul y las palabras Helldiver Corps y For Super Earth",
  },
  {
    nombre: "Llavero musical",
    imagen: "assets/Productos/D11.png",
    descripcion:
      "Llavero verde con código de Spotify y la canción Dios mío, qué mujer de Joan Sebastian",
  },
  {
    nombre: "Gato grabado",
    imagen: "assets/Productos/D12.png",
    descripcion:
      "Pieza de madera con la silueta y el grabado de un gato sentado",
  },
  {
    nombre: "Mononito con chancla",
    imagen: "assets/Productos/D13.png",
    descripcion:
      "Placa rectangular de madera con un mono grabado sosteniendo una chancla",
  },
  {
    nombre: "Monito grabado",
    imagen: "assets/Productos/D14.png",
    descripcion:
      "Placa rectangular de madera con el grabado de un mono pequeño de ojos grandes",
  },
];

const catalogo = document.getElementById("catalogo-productos");

if (catalogo) {
  const ventana = document.createElement("dialog");
  ventana.className = "producto-modal";
  ventana.setAttribute("aria-labelledby", "producto-modal-titulo");

  const cerrar = document.createElement("button");
  cerrar.type = "button";
  cerrar.className = "producto-modal-cerrar";
  cerrar.setAttribute("aria-label", "Cerrar vista del producto");
  cerrar.textContent = "×";

  const imagenGrande = document.createElement("img");
  const titulo = document.createElement("h2");
  titulo.id = "producto-modal-titulo";
  ventana.append(cerrar, imagenGrande, titulo);
  document.body.append(ventana);

  cerrar.addEventListener("click", () => ventana.close());
  ventana.addEventListener("click", (evento) => {
    const limites = ventana.getBoundingClientRect();
    if (
      evento.target === ventana &&
      (evento.clientX < limites.left ||
        evento.clientX > limites.right ||
        evento.clientY < limites.top ||
        evento.clientY > limites.bottom)
    )
      ventana.close();
  });
  ventana.addEventListener("close", () => {
    document.body.classList.remove("producto-modal-abierto");
  });

  const tarjetas = productos.map((producto) => {
    const tarjeta = document.createElement("figure");
    tarjeta.className = "catalog-card";

    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.alt = producto.descripcion;
    imagen.loading = "lazy";
    imagen.decoding = "async";

    const nombre = document.createElement("figcaption");
    nombre.textContent = producto.nombre;

    const abrir = document.createElement("button");
    abrir.type = "button";
    abrir.className = "producto-abrir";
    abrir.setAttribute("aria-label", `Ver ${producto.nombre} en grande`);
    abrir.setAttribute("aria-haspopup", "dialog");
    abrir.append(imagen);
    abrir.addEventListener("click", () => {
      imagenGrande.src = producto.imagen;
      imagenGrande.alt = producto.descripcion;
      titulo.textContent = producto.nombre;
      ventana.showModal();
      document.body.classList.add("producto-modal-abierto");
    });
    tarjeta.append(abrir, nombre);
    tarjeta.addEventListener("click", (evento) => {
      if (!abrir.contains(evento.target)) abrir.click();
    });
    return tarjeta;
  });

  catalogo.replaceChildren(...tarjetas);
}
