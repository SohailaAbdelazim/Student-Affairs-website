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
    email: document.getElementById("studentEmail").value,
    phone: document.getElementById("studentPhone").value,
  };
  studentArray.push(student);
  localStorage.setItem("students", JSON.stringify(studentArray));
}



/* edit page */
function deleteconfirmation() {
  var result = confirm("Are you sure you want to delete the student record? ");
  if(result==true){ /* as it return true if the user clicks “OK”, and false otherwise. */ 
    localStorage.removeItem(studentArray);

  }
  else{
    console.log("not confirmed!")
  }
} 


/*function editstudent(){
  document.getElementById("").value= student.name; 
}*/ 

function editdata(id) {
  // Find the student with the matching id
  let studentArray = localStorage.getItem("students")
  ? JSON.parse(localStorage.getItem("students"))
  : [];
 // var students = JSON.parse(localStorage.getItem("students")) || [];
  var studentIndex = studentArray.findIndex(function(student) {
    return student.id === id;
  });
  var student = studentArray[studentIndex];
  console.log(student); 
  student.name='sohaila'; 
  document.querySelector('#studentName').value = student.name ; 

 /* // Fill the edit form with the student's information
  document.getElementById("studentId").innerHTML = student.id;
  document.getElementById("studentName").innerHTML = student.name;
  document.getElementById("studentDate").value = student.dob;
  document.getElementById("studentGpa").value = student.gpa;
  document.getElementById("studentGender").value = student.gender;
  document.getElementById("studentLevel").value = student.level;
  document.getElementById("studentStatus").value = student.status;
  document.getElementById("studentEmail").value = student.email;
  document.getElementById("studentPhone").value = student.phone; */

  // Save the updated student data to local storage
  document.getElementById("saveEditButton").addEventListener("click", function() {
    student.id = document.getElementById("studentId").value;
    student.name = document.getElementById("studentName").value;
    student.dob = document.getElementById("studentDate").value;
    student.gpa = document.getElementById("studentGpa").value;
    student.gender = document.getElementById("studentGender").value;
    student.level = document.getElementById("studentLevel").value;
    student.status = document.getElementById("studentStatus").value;
    student.email = document.getElementById("studentEmail").value;
    student.phone = document.getElementById("studentPhone").value;

    localStorage.setItem("students", JSON.stringify(students));
  });
} 


// get the Save button
const saveBtn = document.querySelector('.save');

// add event listener to the Save button
saveBtn.addEventListener('click', function(e) {
  e.preventDefault();

  // get the input values
  const name = document.querySelector('#studentName').value;
  const birthdate = document.querySelector('#studentDate').value;
  const gpa = document.querySelector('#studentGpa').value;
  const gender = document.querySelector('input[name="ma"]:checked').value;
  const level = document.querySelector('select[name="level"]').value;
  const status = document.querySelector('input[name="BE"]:checked').value;
  const email = document.querySelector('#studentEmail').value;
  const tel = document.querySelector('#studentPhone').value;

  // get the student data from the local storage
  let studentsData = JSON.parse(localStorage.getItem('studentsData'));

  // find the student with the same name in the array and update their data
  studentsData.forEach((student, index) => {
    if (student.name === name) {
      student.birthdate = birthdate;
      student.gpa = gpa;
      student.gender = gender;
      student.level = level;
      student.status = status;
      student.email = email;
      student.tel = tel;
    }
  });

  // save the updated student data back to the local storage
  localStorage.setItem('studentsData', JSON.stringify(studentsData));

  // redirect to the students data page
  window.location.href = 'students-data.html';
});