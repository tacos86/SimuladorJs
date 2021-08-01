const colorElegido = document.querySelector('.color');
 
colorElegido.addEventListener('change', e => {
    e.preventDefault();
    mostrarColor = colorElegido.color.value;
    console.log(mostrarColor);
});

const cantidadElegida = document.querySelector('.cantidad');
 
cantidadElegida.addEventListener('change', e => {
    e.preventDefault();
    mostrarCantidad = cantidadElegida.cantidad.value;
    console.log(mostrarCantidad);
    precio = mostrarCantidad * 140;
});



let enviarPedido = document.querySelector('#pedido');
enviarPedido.addEventListener('click', mostrarPedido);

function mostrarPedido(e){
  e.target.removeEventListener(e.type, mostrarPedido)
  const parrafo = document.createElement("p");
  const pedido = document.createTextNode("Tu pedido: " + mostrarCantidad + " ovillos de lana color " + mostrarColor + ". El valor total es de $ " + precio);
  parrafo.appendChild(pedido);  
  const span = document.getElementById("span");
  span.insertBefore(parrafo,enviarPedido);

  enviarPedido.style.display = 'none'
  parrafo.style.backgroundImage = 'linear-gradient(315deg, #d5adc8 0%, #ff8489 74%)'
  parrafo.style.borderRadius = '25px'
  parrafo.style.fontSize = '1.5rem'
  parrafo.style.padding = '1rem'
  parrafo.style.textAlign = 'center'
  parrafo.style.width = '500px'
}

