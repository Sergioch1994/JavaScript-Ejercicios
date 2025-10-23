import './style.css'

// EX6

const ex6 = document.querySelector('#ex6');
const div6 = document.createElement('div');
div6.textContent = 'Este es el contenido del div creado dinámicamente para el ejercicio 6.';
ex6.appendChild(div6);
div6.classList.add('mouse');
div6.textContent = 'Pasa el ratón por aquí';

div6.addEventListener('mousemove', (a) => {
  console.log("Coordenadas X e Y: ", a.clientX, a.clientY);
});


// EX7

const inputTest = document.createElement('input');
inputTest.setAttribute('id', 'input-test');
const contenedorEx7 = document.querySelector('#ex7');
contenedorEx7.appendChild(inputTest);

// EX 13

const zonaParaDrop = document.createElement('div');
zonaParaDrop.className = 'zona-drag';
zonaParaDrop.textContent = 'Suelta el dragable aquí';

const elementoDragable = document.createElement('div');
elementoDragable.className = 'dragable';
elementoDragable.textContent = 'Elemento Dragable';
elementoDragable.draggable = true;

app.appendChild(zonaParaDrop);
app.appendChild(elementoDragable);

const ciudad = {nombre: "Madrid", pais: "España", poblacion: 3223000};





elementoDragable.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData("sendData", JSON.stringify(ciudad));
  console.log("Lanzando dragstart");
})


zonaParaDrop.addEventListener('dragover', (event) => {
  event.preventDefault();
});

zonaParaDrop.addEventListener('drop', (event) => {
  event.preventDefault();
  const datosRecibidos = JSON.parse(event.dataTransfer.getData("sendData"));
  zonaParaDrop.textContent = datosRecibidos;
  console.log("Drop realizado");
  
});




























