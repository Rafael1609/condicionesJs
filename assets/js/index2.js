const verificar = document.getElementById("button");
const mensajeDiv = document.getElementById("mensaje");
verificar.addEventListener("click", function () {
  let sticker1 = parseInt(document.getElementById("input1").value);

  let sticker2 = parseInt(document.getElementById("input2").value);
  let sticker3 = parseInt(document.getElementById("input3").value);
  let totalStickers = sticker1 + sticker2 + sticker3;
  if (totalStickers <= 10) {
    mensajeDiv.textContent = "Lleva " + totalStickers + " stickers";
  } else {
    mensajeDiv.textContent = "Llevas demasiados stickers";
  }
});
