alert("Bienvenidos a Lanas del Rey");

const menu = () => {
    // Variable del menú
    let colorDeLana = prompt (`¿Qué color de lana desea llevar hoy?:
    * Rojo
    * Azul
    * Verde
    * Amarillo
    * Marrón`);
    
    
    switch (colorDeLana) {
        case "Rojo":
            alert (
                "El ovillo sale $140"
            );
            break;
    
        case "Azul":
            alert (
                "El ovillo sale $140"
            );
            break;
    
        case "Verde":
            alert (
                "El ovillo sale $140"

            );
            break;
    
        case "Amarillo":
            alert (
                "El ovillo sale $140"
                
            );
            break;
    
        case "Marrón":
            alert (
                "El ovillo sale $140"
                
            );
            break;
    
        default:
            alert (
                "Lo sentimos, no tenemos ese color de lana."
            );
            break;
    }
    };
    
    menu (); //Final de la variable del menú
    
    // Variable del pedido
    let cantidad = prompt ("¿Cuántos ovillos desea llevar?");
    const precioTotal = cantidad * 140;
    //Final de la variable del pedido
    
    // Función con el pedido del cliente
    const pedido = cantidad => {
        alert ("El total de tu pedido es:" + " " + "$" + precioTotal);
    };
    
    pedido (cantidad); //Final de la función del pedido
    
    
    