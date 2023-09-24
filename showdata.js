import {
  getAuth
}

  from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

import {
  getDatabase,
  ref,
  onValue
}
  from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
const auth = getAuth();
const database = getDatabase();

// Read Data
let Attendanceinsignuppage = document.getElementById("Attendance-in-signup-page");
Attendanceinsignuppage.addEventListener('click',()=>{
     window.location.href="./mark.html"
});
display();
function display() {
  const blogRef = ref(database, "users/");
  onValue(blogRef, (snapshot) => {
    const publishedBlogContainer = document.getElementById("published-blog");
    publishedBlogContainer.innerHTML = '';

    snapshot.forEach(function (childSnapshot) {
      const blogEntry = childSnapshot.val();
      console.log(blogEntry);

      const blogEntryElement = document.createElement("div");
      blogEntryElement.className = "publish-content blog";
      blogEntryElement.innerHTML = `
        <div class="publisher-info">
          <!-- Add publisher info here -->
        </div>
        <div class="content">
        
         <div class="dataTable">
          
          <div id="name">${blogEntry.username}</div>
          <div id="f-name">${blogEntry.FatherName}</div>
          <div id="rollno">${blogEntry.rollno}</div>
          <div id="cour-name">${blogEntry.courseName}</div>
          <div>${blogEntry.teacherName}</div>
          <div>${blogEntry.sectionName}</div>
          <div id="schedule">${blogEntry.schedule}</div>
          <div id="batch-name">${blogEntry.batchNumber}</div>
          <div id="cl-time">${blogEntry.classTimings}</div>
          <div id="cl-time">${blogEntry.selectMark}</div>
          <div id="cl-time">${blogEntry.markTime}</div>
          
        </div>
  
        </div>
      `;

      publishedBlogContainer.appendChild(blogEntryElement);
    });
  });
}
