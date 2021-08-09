//VARIABLES
const colorElegido = document.querySelector('.color');
const cantidadElegida = document.querySelector('.cantidad');

//EVENTOS
colorElegido.addEventListener('change', e => {
    e.preventDefault();
    mostrarColor = colorElegido.color.value;
    console.log(mostrarColor);
});
 
cantidadElegida.addEventListener('change', e => {
    e.preventDefault();
    mostrarCantidad = cantidadElegida.cantidad.value;
    console.log(mostrarCantidad);
    precio = mostrarCantidad * 140;
});

//MOSTRAR EL PEDIDO

let enviarPedido = document.querySelector('#pedido');
enviarPedido.addEventListener('click', mostrarPedido);

//FUNCION PARA MOSTRAR EL PEDIDO

function mostrarPedido(e){
  e.target.removeEventListener(e.type, mostrarPedido)
  const parrafo = document.createElement("p");
  const pedido = document.createTextNode("Tu pedido: " + mostrarCantidad + " ovillos de lana color " + mostrarColor + ". El valor total es de $ " + precio);
  parrafo.appendChild(pedido);  
  const span = document.getElementById("span");
  span.insertBefore(parrafo,enviarPedido);

  //FORMATO DEL CARTEL QUE APARECE CON EL PEDIDO

  enviarPedido.style.display = 'none'
  parrafo.style.backgroundColor = '#F59EA7'
  parrafo.style.borderRadius = '25px'
  parrafo.style.fontSize = '1.5rem'
  parrafo.style.padding = '1rem'
  parrafo.style.textAlign = 'center'
  parrafo.style.fontFamily = "'Thasadith', sans-serif;"
  parrafo.style.height = '50px'
  parrafo.style.verticalAlign = "center"
}


//Desafio 12 - Agregar JQUERY

$( document ).ready(function() 
{
   alert( "Bienvenidos a Lanas del Rey")});


   $("ul").append('<button id="btnMas">Ver más..</button>');   

   $("#btnMas").click(function(){
    $("ul").append("<p>Todas las lanas son 100% acrílicas</p>");
  });
