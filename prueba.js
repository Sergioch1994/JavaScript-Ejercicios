let name = "Sergio";



//La persona y su color

let coche = {

    marca: "Nissan",
    tipo: "Deportivo",
    precio: "15$",
    stock: 33,

}

console.log(`el coche de la marca ${coche.marca}, es un ${coche.tipo}, cuyo valor es ${coche.precio} y su stock es ${coche.stock}`)

//Ejercicio 1

const nombres = ["Isaac", "Moises", "Víctor", "Alejandro"];

console.log(nombres);

//Ejercicio 2





//Ejercicio 3

const persona = {
    nombre: "Pepe",
    edad: "15",
    ciudad: "Berlín",
    saludar: function() {
        console.log(`Hola qué tal mi nombre es ${this.nombre}!`);
    }
};

console.log(persona.saludar());

//Ejercicio 4

const frutas = ["pera", "aguacate", "manzana"];

for (let i = 0; i < frutas.length; i++) {
    console.log(`El índice es ${i}), fruta: ${frutas[i]}`)
}

mostrarArray(frutas);
mostrarArray(["pera", "aguacate","manzana"]);

