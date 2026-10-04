function establecerFechaActual() {
  const ahora = new Date();

  const anio = ahora.getFullYear();

  const mes = String(ahora.getMonth() + 1).padStart(2, "0");

  const dia = String(ahora.getDate()).padStart(2, "0");

  const hora = String(ahora.getHours()).padStart(2, "0");

  const minutos = String(ahora.getMinutes()).padStart(2, "0");

  const segundos = String(ahora.getSeconds()).padStart(2, "0");

  const fechaCompleta = `${anio}-${mes}-${dia} ${hora}:${minutos}:${segundos}`;

  document.getElementById("fechaHora").value = fechaCompleta;
}

window.onload = establecerFechaActual;

function convertirBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = reject;
  });
}