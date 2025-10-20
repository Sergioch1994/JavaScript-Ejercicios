let name = "Sergio";

//La persona y su color

let coche = {
  marca: "Nissan",
  tipo: "Deportivo",
  precio: "15$",
  stock: 33,
};

console.log(
  `el coche de la marca ${coche.marca}, es un ${coche.tipo}, cuyo valor es ${coche.precio} y su stock es ${coche.stock}`
);

//Ejercicio 1

const nombres = ["Isaac", "Moises", "Víctor", "Alejandro"];

console.log(nombres);

//Ejercicio 2

//Ejercicio 3

const persona = {
  nombre: "Pepe",
  edad: "15",
  ciudad: "Berlín",
  saludar: function () {
    console.log(`Hola qué tal mi nombre es ${this.nombre}!`);
  },
  caminar: function () {
    console.log(`Me voy a dar una vuelta`);
  },
};

console.log(persona.saludar());
console.log(persona.caminar());

//Ejercicio 4

const frutas = ["pera", "aguacate", "manzana"];

for (let i = 0; i < frutas.length; i++) {
  console.log(`El índice es ${i}), fruta: ${frutas[i]}`);
}

console.log(frutas);

//Ejercicio 5

const inventario = [
  {
    nombre: "Pan",
    precio: 1.2,
    stock: 25,
  },
  {
    nombre: "Agua",
    precio: 0.45,
    stock: 200,
  },
  {
    nombre: "Leche",
    precio: 0.90,
    stock: 60,
  },
];

let valorProductos = 0;
inventario.forEach((elemento) => {
    valorProductos += elemento.precio * elemento.stock;
});

console.log('El valor total del inventario es: ', valorProductos);

//Ejercicio 6

inventario[1] += 10;

inventario.push("Ropa");
console.log(inventario);

//Ejerficio 7


const inventarito = [
  {
    nombre: "Pan",
    precio: 1.2,
    stock: 25,
  },
  {
    nombre: "Agua",
    precio: 0.45,
    stock: 200,
  },
  {
    nombre: "Leche",
    precio: 0.90,
    stock: 60,
  },
];

function buscarProducto(nombre) {
    let productoEncontrado = null;
    inventario.forEach(producto => {
        if (producto.nombre === nombre) {
            productoEncontrado = producto;
        }
    });
    return productoEncontrado;
}

const producto1 = buscarProducto("Agua");
console.log(producto1);

//Ejercicio 8

let periférico = ["Ratón", "Precio:15$", "Stock:20"];

let periféricoCadena = periférico.map()