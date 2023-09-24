import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {
    getDatabase,
    ref,
    set,
    update,
    onValue,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

const auth = getAuth();
const database = getDatabase();

let loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", () => {
    insertData();
    function insertData() {
        let email = document.getElementById("login-email").value;
        let password = document.getElementById("login-password").value;
        let uniqueId = auth.currentUser.uid;
        const sref = ref(database, "admin/", uniqueId);
        onValue(
            sref,
            (snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    if (email === data.email && password === data.password) {
                        alert("Hello Admin");
                        set(ref(database, "admin/"), {
                            email: email,
                            password: password,
                        });
                        const dt = new Date();
                        update(ref(database, "admin/"), {
                            last_login: dt,
                        });
                        window.location.href = "./selection.html";
                    } else {
                        alert("Not an Admin/Unauthorized user");
                    }
                } else {
                    alert(
                        "This roll number does not exist.Please enter correct roll number."
                    );
                }
            },
            (error) => {
                console.error("Error fetching data:", error);
            }
        );
    }
});
