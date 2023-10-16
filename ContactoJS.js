document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var confirmarEmail = document.getElementById("confirmarEmail").value;

  if (nombre === "" || apellido === "") {
    alert("Por favor, ingresa tu nombre y apellido.");
    return;
  }

  if (email !== confirmarEmail) {
    alert("Los correos electrónicos no coinciden. Por favor, verifica.");
    return;
  }

  // Acá podemos realizar acciones adicionales (cuando veamos back end) como enviar el formulario a un servidor.

  alert("Formulario enviado correctamente.");
});