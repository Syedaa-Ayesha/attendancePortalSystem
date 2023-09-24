import {
    getAuth
}
    from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {
    getDatabase,
    ref,
    update, 
    onValue
}
    from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
const auth = getAuth();
let database = getDatabase();
let markAttendanceButton = document.getElementById("markAttendanceButton");
markAttendanceButton.addEventListener('click', () => {
    let rollNo = document.getElementById('rollNo').value;
    let selectMark = document.getElementById('select-Mark').value;
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let markTime = `${hours}:${minutes}:${seconds}`;
    const sref = ref(database, `users/${rollNo}`);
    onValue(sref, (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            console.log(data);
            alert("Roll no. " + data.rollno + " Attendace marked");
            update(ref(database, 'users/' + rollNo), {
                    selectMark: selectMark,
                    markTime: markTime,
            })
        } else {
            alert('This roll number does not exist.Please enter correct roll number.');
        }
    }, (error) => {
        console.error('Error fetching data:', error);
    });
         document.getElementById('rollNo').value = "";
         document.getElementById('select-Mark').value = "";

})