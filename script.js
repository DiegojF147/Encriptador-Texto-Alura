function encriptar() {
  let texto = document.getElementById("texto").value;
  let mensaje = document.getElementById("mensaje");
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let candado = document.getElementById("candado");
  let encriptado = document.getElementById("encriptado");
  let desencriptado = document.getElementById("desencriptado");
  let textoCifrado = "";
  let validarTexto = /[áéíóúÁÉÍÓÚ]/;

  if (validarTexto.test(texto) || texto !== texto !== texto.toLowerCase()) {
    swal(
      "Recuerda!",
      "Debes ingresar un texto en minusculas y sin acentos",
      "warning"
    );
    return;
  }
  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case "e":
        textoCifrado += "enter";
        break;
      case "i":
        textoCifrado += "imes";
        break;
      case "a":
        textoCifrado += "ai";
        break;
      case "o":
        textoCifrado += "ober";
        break;
      case "u":
        textoCifrado += "ufat";
        break;
      default:
        textoCifrado += texto[i];
    }
  }

  if (texto.length != 0) {
    mensaje.textContent = textoCifrado;
    document.getElementById("texto").value = "";
    encriptado.style.display = "none";
    desencriptado.style.display = "block";
    document.getElementById("btn-copiar").style.display = "block";
  } else {
    candado.src = "./img/candado.jpg";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let mensaje = document.getElementById("mensaje");
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let candado = document.getElementById("candado");
  let textoDescifrado = texto

    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  if (texto.length != 0) {
    mensaje.textContent = textoDescifrado;
  } else {
    candado.src = "./img/candado.jpg";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
  document.getElementById("texto").value = "";
}

function copiar() {
  let mensaje = document.getElementById("mensaje");
  let texto = document.getElementById("texto");
  texto.value = mensaje.textContent;
}
