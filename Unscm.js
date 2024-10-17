// Manejar el evento de cerrar sesión
document.getElementById('cerrar-sesion').addEventListener('click', () => {
    alert('Cerrando sesión...');
    // Lógica para cerrar sesión (añadir tu código de Firebase aquí si lo necesitas)
    // Por ejemplo:
    // auth.signOut().then(() => {
    //     window.location.href = 'login.html'; // Redirigir a la página de login
    // });
    window.location.href = 'registro.html'; // Simulación de redirección tras cerrar sesión
});

// Manejar el evento de "Pensum"
document.getElementById('pensum').addEventListener('click', () => {
    alert('Mostrando Pensum...');
    // Aquí puedes agregar lógica para mostrar el Pensum o redirigir a otra página
    window.location.href = 'pensum.html'; // Simulación de redirección al Pensum
});

// Manejar el evento de "Pensum"
document.getElementById('Biblioteca').addEventListener('click', () => {
    alert('Mostrando Biblioteca...');
    // Aquí puedes agregar lógica para mostrar el Pensum o redirigir a otra página
    window.location.href = 'Biblioteca.html'; // Simulación de redirección al Pensum
});
