//seleccionar el boton salir

const btnExit = document.getElementById('btn-exit');

//mostrar u ocultar boton

const Logueado = JSON.parse(sessionStorage.getItem('Logueado'));

if(Logueado){
    btnExit.classList.remove('d-none');
};

btnExit.addEventListener("click", () => {
    swal
      .fire({
        title: "¿Está seguro?",
        text: "Esta acción cerrará la sesión actual",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Salir",
        cancelButtonText: "Cancelar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          // Resetear valores
          sessionStorage.setItem("Logueado", false);
          sessionStorage.setItem("usuario", null);
  
          // Esconder boton
          btnExit.classList.add("d-none");
  
          // Redireccionar a home
          window.location.href = "../index.html";
        }
      });
  });