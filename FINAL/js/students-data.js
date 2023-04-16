function deleteFunction(){
document.getElementById("myTable").deleteRow(1);
}

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
    department: document.getElementById("studentDep").value,
    email: document.getElementById("studentEmail").value,
    phone: document.getElementById("studentPhone").value,
  };
  studentArray.push(student);
  localStorage.setItem("students", JSON.stringify(studentArray));
}
