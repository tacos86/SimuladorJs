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
});

let enviarPedido = document.querySelector('#pedido');
enviarPedido.addEventListener('click', mostrarPedido);

function mostrarPedido(){
  console.log('tu pedido es ' + mostrarCantidad + " ovillos de lana color " + mostrarColor);
}










let boton = document.getElementById("boton");
boton.addEventListener("click", desplegarTexto);

function desplegarTexto(e) {
  e.target.removeEventListener(e.type, desplegarTexto);
  let texto = document.createElement("p");
  texto.innerHTML = 'Todas nuestras lanas son 100% acrílicas y estan realizadas con los más altos niveles de calidad. <br> Todas se venden en madejas de 500 grs o en ovillos de 200 grs. <br> Hacemos envíos en CABA y GBA.'
  document.body.appendChild(texto);

  texto.style.textAlign = "center";
    
}




 





