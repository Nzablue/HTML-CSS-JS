const boton = document.getElementById('boton-saludo');


const nombreTitulo = document.querySelector('#tarjeta-perfil');

boton.addEventListener('click', function()  {
  alert('Hola, gracias por interactuar conmigo!');

  nombreTitulo.textContent = 'Has Interactuado conmigo!';
  nombreTitulo.style.color = 'Red';
});

