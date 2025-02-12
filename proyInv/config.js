import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAC2ozvr5JF0h0y-uKPezM5ngimEHkrOzQ",
  authDomain: "invenjse.firebaseapp.com",
  projectId: "invenjse",
  storageBucket: "invenjse.firebasestorage.app",
  messagingSenderId: "423840113966",
  appId: "1:423840113966:web:2f4f46cabe64d32ed686bf"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const db= getFirestore(app)
const provider= new GoogleAuthProvider()

// Funcion para iniciar sesion en Google

const googleLogin = async () => {
    try {
        const result= await signInWithPopup(auth,provider)
        const user= result.user
        console.log('user', user)

        // Guardar el usuario en Firestore  si no existe
        const userRef=doc(db,"users",user.uid)
        const userSnap=await getDoc(userRef)
        if (!userSnap.exists()) {
            await setDoc(userRef, {
                nombre: user.displayName,
                email: user.email,
                foto: user.photoURL,
                rol:"usuario",
                creado: new Date()
            })
        }
        console.log("Usuario autenticado", user);
        window.location.href="dashboard.html"
    } catch (error) {
        console.error("Error al iniciar sesión en Google", error)        
    }
}
document.getElementById("googleLoginBtn").addEventListener("click",googleLogin)