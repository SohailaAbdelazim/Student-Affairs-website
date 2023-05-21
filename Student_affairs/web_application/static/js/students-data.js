// function to delete frist row
function deleteFunction(){
  document.getElementById("myTable").deleteRow(1);
  }

// function to store the data in the local storage .
// let studentArray = localStorage.getItem("students")
//   ? JSON.parse(localStorage.getItem("students"))
//   : [];

// onload = function(){
//   let table = ""; 
//   studentArray.forEach(function(student) { 
//     table += "<tr>";
//     table += "<td>" + student.id + "</td>"; 
//     table += "<td>" + student.name + "</td>"; 
//     table += "<td>" + student.gpa + "</td>"; 
//     table += "<td>" + student.level + "</td>"; 
//     table += "<td>" + student.gender + "</td>"; 
//     table += "<td>" + student.phone + "</td>"; 
//     table += "<td>" + student.status + "</td>"; 
//     table += "<td>" + student.date + "</td>"; 
//     table += "<td>" + student.email + "</td>"; 
//     table += "<td>" + student.department + "</td>"; 
//     table += "<td><a class='centerLink' href='Editpage.html?id=" + student.id + "'><button class='Edit-S' onclick='edit()'><img class='edit_img_S' src='../photos/edit.png'></button></a> <a class='centerLink'><button class='Delet-S' onclick='deleteFunction()'><i class='fa fa-fw fa-trash'></i></button></a></td>"; 
//     table += "</tr>";

//   }); 
  
//   document.getElementById("Body").innerHTML = table;
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

/* edit page */
function deleteconfirmation() {
  var result = confirm("Are you sure you want to delete the student record? ");
  if (result==true){ /* as it return true if the user clicks “OK”, and false otherwise. */ 
    localStorage.removeItem(studentArray);

  } else {
    console.log("not confirmed!")
  }
}

function deleteFunction(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}
