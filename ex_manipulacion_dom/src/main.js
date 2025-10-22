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

























