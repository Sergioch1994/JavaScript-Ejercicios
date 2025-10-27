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

// EX 19

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(datos => {
    for (let i = 0; i < datos.length; i++) {
      console.log(datos[i].name);
    }
  })
  

  // EX 20

  fetch('https://jsonplaceholder.typicode.com/datos')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener los datos: ' + response.status);
    }
    return response.json();
  })
  .then(datos => {
    console.log('Datos recibidos:', datos);
  })
  .catch(error => {
    console.error('Hubo un problema con la petición Fetch:', error);
  });
  
  // EX 21

  const datosEjemplo = {
   tittle: 'foo',
   body: 'bar',
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosEjemplo)
  } )
  .then(response => response.json())
  .then(datos => {
    console.log('Respuesta del servidor:', datos);
  })
  .catch(error => {
    console.error('Error al enviar los datos:', error);
  });
    
  // EX 22

  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: 1,
      title: 'Changed Title',
      body: 'Changed Body',
    })
  })
  .then(response => response.json())
  .then(datos => {
    console.log('Respuesta del servidor tras PUT:', datos);
  })
  .catch(error => {
    console.error('Error al actualizar los datos:', error);
  });

  // EX 23

   fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: 1,
      title: 'Changed Title with PATCH',
      
    })
  })
  .then(response => response.json())
  .then(datos => {
    console.log('Respuesta del servidor tras PATCH:', datos);
  })
  .catch(error => {
    console.error('Error al actualizar los datos:', error);
  });





























