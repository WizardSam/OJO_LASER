// Para agregar un producto, guarda su imagen en assets/Productos y añade un objeto al arreglo.
const productos = [
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

    tarjeta.append(imagen, nombre);
    return tarjeta;
  });

  catalogo.replaceChildren(...tarjetas);
}
