function encriptarTexto() {
    let texto = document.getElementById("textoEntrada").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("textoSalida").value = textoEncriptado;
    ocultarImagen();
}

function desencriptarTexto() {
    let texto = document.getElementById("textoEntrada").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("textoSalida").value = textoDesencriptado;
    ocultarImagen();
}

function copiarTexto() {
    let textoSalida = document.getElementById("textoSalida");
    textoSalida.select();
    textoSalida.setSelectionRange(0, 99999); // Para dispositivos móviles

    document.execCommand("copy");
    alert("Texto copiado: " + textoSalida.value);
}

function ocultarImagen() {
    let placeholderImg = document.getElementById("placeholderImg");
    placeholderImg.style.display = "none";
}
