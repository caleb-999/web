function validar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let sugerencia = document.getElementsByName("sugerencia");
    let sugerencias = document.getElementById("sugerencias").value;
    let informacion = "";
  
    for (let k = 0; k < sugerencia.length; k++) {
      if (sugerencia[k].checked) {
        informacion = sugerencia[k].value;
      }
    }
  
    if (nombre === "" || apellido === "" || informacion === "" || sugerencias === "") {
      alert("Por favor, complete todas las preguntas antes de enviar sus sugerencias.");
    } else {
      alert("De acuerdo " + nombre + " " + apellido + ", sus sugerencias han sido enviadas a nuestro sistema. Tomaremos en cuenta lo que nos dice. ¡Gracias!");
      console.log("Nombre: " + nombre + "\nApellido: " + apellido + "\nInformación informática: " + informacion + "\nSugerencias: " + sugerencias);
    }
  }
  

function limpiar(){
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("sugerencias").value="";
    let sugerencia=document.getElementsByName("sugerencia");

    for(let k=0; k<sugerencia.length; k++)
    {
        if(sugerencia[k].checked)
           sugerencia[k].checked=false ;
    }

}