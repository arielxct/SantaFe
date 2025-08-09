document.getElementById('form-registro').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!nombre || !email || !password) {
    mostrarMensaje("Todos los campos son obligatorios", false);
    return;
  }

  const nuevoUsuario = { nombre, email, password };
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const usuarioExistente = usuarios.find(u => u.email === email);
  if (usuarioExistente) {
    mostrarMensaje("⚠️ Este correo ya está registrado.", false);
    return;
  }

  usuarios.push(nuevoUsuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  mostrarMensaje("✅ Registro exitoso. ¡Bienvenido!", true);
  document.getElementById('form-registro').reset();
});

function mostrarMensaje(texto, exito) {
  const mensaje = document.getElementById('mensaje');
  mensaje.innerText = texto;
  mensaje.style.color = exito ? "green" : "red";
}
