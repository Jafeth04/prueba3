import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    onAuthStateChanged 
} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyD9Typ6I1nAT2jcyF8uzNWjD9AyZ9j0kKE",
    authDomain: "pluni-e5d0e.firebaseapp.com",
    projectId: "pluni-e5d0e",
    storageBucket: "pluni-e5d0e.appspot.com",
    messagingSenderId: "109626506816",
    appId: "1:109626506816:web:c1ea81ff03203ee97829a5",
    measurementId: "G-R2MLZWPM07"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBtn = document.getElementById('login');
const cerrarBtn = document.getElementById('cerrar');
const messageElement = document.getElementById('message'); // Elemento para mostrar mensajes

// Manejar el evento de inicio de sesión
loginBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del botón

    const email = document.getElementById('emaillog').value;
    const password = document.getElementById('passwordlog').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            messageElement.innerHTML = "Usuario logueado. Redirigiendo...";
            console.log(cred.user);

            // Redirigir a asistencia.html
            setTimeout(() => {
                window.location.href = "Unscm.html";
            }, 2000); // Espera 2 segundos antes de redirigir

        }).catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/invalid-email') {
                messageElement.innerHTML = 'El correo no es válido';
            } else if (errorCode === 'auth/user-disabled') {
                messageElement.innerHTML = 'El usuario ha sido deshabilitado';
            } else if (errorCode === 'auth/user-not-found') {
                messageElement.innerHTML = 'El usuario no existe';
            } else if (errorCode === 'auth/wrong-password') {
                messageElement.innerHTML = 'Contraseña incorrecta';
            } else {
                messageElement.innerHTML = 'Error desconocido: ' + error.message;
            }
        });
});

// Manejar el evento de cerrar sesión
cerrarBtn.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        messageElement.innerHTML = 'Sesión cerrada';
    }).catch((error) => {
        messageElement.innerHTML = 'Error al cerrar sesión: ' + error.message;
    });
});

// Comprobar el estado de autenticación
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Usuario activo");
        const emailVerified = user.emailVerified;
        if (emailVerified) {
            // Redirigir al usuario a la página deseada
            window.location.href = "Unscm.html"; // Cambia esto a tu página de destino
        } else {
            messageElement.innerHTML = "Por favor, verifica tu correo electrónico.";
            auth.signOut();
        }
    } else {
        console.log("Usuario inactivo");
    }
});
