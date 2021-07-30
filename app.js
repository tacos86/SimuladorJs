let color = document.getElementById("color");
let cantidad = document.getElementById("cantidad");
console.log(cantidad)

let boton = document.getElementById("boton");
boton.addEventListener("click", desplegarTexto);

function desplegarTexto(e) {
  e.target.removeEventListener(e.type, desplegarTexto);
  let texto = document.createElement("p");
  texto.innerHTML = 'Todas nuestras lanas son 100% acrílicas y estan realizadas con los más altos niveles de calidad. <br> Todas se venden en madejas de 500 grs o en ovillos de 200 grs. <br> Hacemos envíos en CABA y GBA.'
  document.body.appendChild(texto);

  texto.style.textAlign = "center";
    
}




 





