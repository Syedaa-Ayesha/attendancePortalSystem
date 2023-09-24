import {
    getAuth,
    signOut
}
    from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {
    getDatabase,
    ref,
    update,
}
    from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

const auth = getAuth();
const database = getDatabase();
console.log(auth);
console.log(database);
const addDataButton = document.getElementById("addDataButton");
addDataButton.addEventListener('click', () => {
    var rollNo = document.getElementById('rollNo').value;
    var classTimings = document.getElementById('classTimings').value;
    var schedule = document.getElementById('schedule').value;
    var teacherName = document.getElementById('teacherName').value;
    var sectionName = document.getElementById('sectionName').value;
    var courseName = document.getElementById('courseName').value;
    var batchNumber = document.getElementById('batchNumber').value;
    update(ref(database, 'users/' + rollNo), {
        classTimings: classTimings,
        schedule: schedule,
        teacherName: teacherName,
        sectionName: sectionName,
        courseName: courseName,
        batchNumber: batchNumber,
    })
        .then((resolve) => {
            console.log(`successfully Login`);
        }).catch((error) => {
            console.log("not Successfully");
        })
    document.getElementById('classTimings').value = "";
    document.getElementById('schedule').value = "";
    document.getElementById('teacherName').value = "";
    document.getElementById('sectionName').value = "";
    document.getElementById('courseName').value = "";
    document.getElementById('batchNumber').value = "";
});

const logout_in_signup_page = document.getElementById("logout-in-signup-page");
logout_in_signup_page.addEventListener('click', () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.href = "./signup.html"
    }).catch((error) => {
        // An error happened.
    });
})