function cargarUsuarios() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const tbody = document.querySelector('#tabla-usuarios tbody');
  tbody.innerHTML = "";

  usuarios.forEach((usuario, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td><input type="text" value="${usuario.nombre}" data-index="${index}" data-campo="nombre"></td>
      <td><input type="email" value="${usuario.email}" data-index="${index}" data-campo="email" disabled></td>
      <td><input type="text" value="${usuario.password}" data-index="${index}" data-campo="password"></td>
      <td>
        <button onclick="guardarUsuario(${index})">💾 Guardar</button>
        <button onclick="eliminarUsuario(${index})">🗑️ Eliminar</button>
      </td>
    `;
    tbody.appendChild(fila);
  });
}

function guardarUsuario(index) {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const campos = document.querySelectorAll(`input[data-index="${index}"]`);
  campos.forEach(input => {
    const campo = input.getAttribute('data-campo');
    usuarios[index][campo] = input.value.trim();
  });

  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  alert("✅ Usuario actualizado.");
}

function eliminarUsuario(index) {
  if (!confirm("¿Estás seguro de eliminar este usuario?")) return;

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  usuarios.splice(index, 1);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  cargarUsuarios();
}

window.addEventListener('DOMContentLoaded', cargarUsuarios);
