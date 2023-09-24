import {
    getAuth
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
let enrolStudent = document.getElementById("enrolStudent")
console.log("mvngklk");
enrolStudent.addEventListener('click' , ()=>{
    let username= document.getElementById("username").value;
    let FatherName = document.getElementById("FatherName").value;
    let rollno = document.getElementById("rollno").value;
    let ContactNumber = document.getElementById("ContactNumber").value;
    let CNIC = document.getElementById("CNIC").value;
    let courseName = document.getElementById("courseName").value;
    const uniqueId = auth.currentUser.uid;
    update(ref(database, 'users/' + rollno), {
        username: username,
        FatherName: FatherName,
        rollno: rollno,
        ContactNumber : ContactNumber ,
        CNIC: CNIC,
        courseName: courseName,
       
    })
    document.getElementById("username").value = ""
    document.getElementById("FatherName").value=""
    document.getElementById("rollno").value=""
    document.getElementById("ContactNumber").value=""
    document.getElementById("CNIC").value=""
    document.getElementById("courseName").value=""
})

let logout_in_Enrollment_page =document.getElementById("logout-in-Enrollment-page");
logout_in_Enrollment_page.addEventListener('click',()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      window.location.href = "./signup.html"
    }).catch((error) => {
      // An error happened.
    });
})
