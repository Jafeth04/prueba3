import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { sendEmailVerification, getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

// Firebase configuration
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

const registroBtn = document.getElementById('registro'); // Botón de registro
const messageElement = document.getElementById('message'); // Elemento para mostrar mensajes

registroBtn.addEventListener('click', async (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del botón

    const email = document.getElementById('emailreg').value;
    const password = document.getElementById('passwordreg').value;

    try {
        // Crear el usuario
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        messageElement.innerHTML = "Usuario creado. Se ha enviado un correo de verificación.";

        // Enviar verificación por correo
        await sendEmailVerification(cred.user);
    } catch (error) {
        const errorCode = error.code;

        if (errorCode === 'auth/email-already-in-use') {
            messageElement.innerHTML = 'El correo ya está en uso';
        } else if (errorCode === 'auth/invalid-email') {
            messageElement.innerHTML = 'El correo no es válido';
        } else if (errorCode === 'auth/weak-password') {
            messageElement.innerHTML = 'La contraseña debe tener al menos 6 caracteres';
        } else {
            messageElement.innerHTML = 'Error desconocido: ' + error.message;
        }
    }
});
