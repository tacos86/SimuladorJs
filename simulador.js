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

    
    //Desafio 5 - Agregando Objetos

    class Lana{

        constructor(material, presentacion, agujas){

            this.material = material;
            this.presentacion = presentacion;
            this.agujas = agujas;

        }

        datosLana(){
            return "Datos del producto  "
        }

    }
        //Objetos

    const lana1 = new Lana ("100% Acrílico", "Ovillo de 200 grs", "7/8");
    const lana2 = new Lana ("100% Acrílico" , "Ovillo de 100 grs", "5/6");
    const lana3 = new Lana ("75% Acrílico, 25% Lana", "Ovillo de 250 grs", "8/9");
    const lana4 = new Lana ("100% Lana", "Madeja por 500 grs", "8/9")

    //Array

    const productos = [lana1, lana2, lana3, lana4];
    
    // filtro para mostrar solamente las lanas compuestas de acrilico
    
    const acrilicas = productos.filter(Lana => Lana.material == ("100% Acrílico"));
    console.log(acrilicas);

   
            