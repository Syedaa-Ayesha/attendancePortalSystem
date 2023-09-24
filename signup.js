//-------------------- For Signup or create user---------------------------------------
import {
    getAuth,
    createUserWithEmailAndPassword
}
    from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {
    getDatabase,
    ref,
    set
}
    from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

const auth = getAuth();
const database = getDatabase();
console.log(auth);
console.log(database);
let signup_btn = document.getElementById("signupButton");
signup_btn.addEventListener('click', () => {
    console.log("loaddddd....");
    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeat_pass = document.getElementById("rep-password").value;

    if (password !== repeat_pass) {
        alert('Passwords do not match.');
    }
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(`successfully Signup ${userName}`);
            set(ref(database, "users/" + user.uid), {
                userName: userName,
                email: email,
                password: password,
            })

        }).then((resolve) => {
            console.log("load Successfully");
            window.location.href = "./enroment.html"

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // console.log("not Successfully");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        })

});


