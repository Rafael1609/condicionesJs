const imagen = document.getElementById("miImagen");

imagen.addEventListener("click", function () {
  if (imagen.style.border) {
    imagen.style.border = "";
  } else {
    imagen.style.border = "5px solid red";
  }
});
