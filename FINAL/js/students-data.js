// function to delete frist row
function deleteFunction(){
document.getElementById("myTable").deleteRow(1);
}

// local stroage of student data table
let studentsData =  [];

function reload(){
  let Info = {
    Student_Name : document.getElementById("Student_Name").value,
    ID : document.getElementById("ID").value,
    GPA : document.getElementById("GPA").value,
    Level : document.getElementById("Level").value,
    Departement : document.getElementById("Departement").value,
    Phone : document.getElementById("Phone").value,
    Birth_Day : document.getElementById("Birth_Day").value,
    Status : document.getElementById("Status").value,
    Address : document.getElementById("Email").value
  }
  studentsData.push(Info);
  localStorage.setItem("info", JSON.stringify(studentsData));
}
document.onclick = function(){reload()};

// function deleteFunction(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
// }

/*
    scripts for navigation bar
*/
function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
            }
        }
    }
}


// function to store the data in the local storage .
let studentArray = localStorage.getItem("students")
  ? JSON.parse(localStorage.getItem("students"))
  : [];
function addStudentToLocalStorage() {
  student = {
    id: document.getElementById("studentId").value,
    name: document.getElementById("studentName").value,
    date: document.getElementById("studentDate").value,
    gpa: document.getElementById("studentGpa").value,
    gender: document.getElementById("studentGender").value,
    level: document.getElementById("studentLevel").value,
    status: document.getElementById("studentStatus").value,
    email: document.getElementById("studentEmail").value,
    phone: document.getElementById("studentPhone").value,
  };
  studentArray.push(student);
  localStorage.setItem("students", JSON.stringify(studentArray));
}



/* edit page */
function deleteconfirmation() {
  confirm("Are you sure you want to delete the student record? ");} 

  
function editstudent(){
  document.getElementById("").value= student.name; 
}