let ingresar = document.getElementById("boton");
let mensaje = document.getElementById("parrafo");

ingresar.addEventListener("click", function () {
  const selecta = parseInt(document.getElementById("select1").value);
  const selectb = parseInt(document.getElementById("select2").value);
  const selectc = parseInt(document.getElementById("select3").value);
  if (selecta === 9 && selectb === 1 && selectc === 1) {
    mensaje.innerText = "password 1 correcto";
  } else if (selecta === 7 && selectb === 1 && selectc === 4) {
    mensaje.innerText = "password 2 correcto";
  } else {
    mensaje.innerText = "password incorrecto";
  }
});
