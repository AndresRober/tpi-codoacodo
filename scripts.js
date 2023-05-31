function validarCampoTexto() {
    const resumenButton = document.querySelector("#btncalcular");
    if (!resumenButton.clicked) {
      alert("Debe presionar el botón 'Resumen' antes de enviar el formulario.");
      return false; 
    }
    return true; 
    }
    
  