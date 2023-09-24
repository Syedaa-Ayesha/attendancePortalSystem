
import {
    getAuth,
    signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {
    getDatabase,
    ref,
    update
}
from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

const auth = getAuth();
const database = getDatabase();
console.log(auth);
console.log(database);

const login_btn = document.getElementById("loginButton");
login_btn.addEventListener("click", (e) => {
    console.log(auth);
    console.log(database);
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
     signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const dt = new Date();
            update(ref(database, 'users/' + user.uid),{last_login: dt })
                window.location.href="./enroment.html"
                document.getElementById("login-email").value ="";
                document.getElementById("login-password").value="";
        })
        .catch((error) => {
            const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
        });

});