// onload = function() {
// let studentArray = localStorage.getItem("students")
//   ? JSON.parse(localStorage.getItem("students"))
//   : [];


// let table = "";
// studentArray.forEach(function(student) {
//   table += "<tr>";
//   if(student.status == "Active"){
//     table += "<th  id="+student.id+"> " + "<label class='switch'>" + "<input type='checkbox' checked>" + "<span class='slider round'> </span>" + "</label>" + "</th>";
//   }else{
//     table += "<th  id="+student.id +"> " + "<label class='switch'>" + "<input type='checkbox'>" + "<span class='slider round'> </span>" + "</label>" + "</th>";
//   }
//   table += "<td>" + student.id + "</td>";
//   table += "<td>" + student.name + "</td>";
//   table += "<td>" + student.gpa + "</td>";
//   table += "<td>" + student.level + "</td>";
//   table += "<td> <button class='Edit-S' type='submit' onclick='updateStatus(" + student.id + ")'><img class='edit_img_S' src='../photos/save.png'></button></td>"; 
//   table += "</tr>";
// });

// document.getElementById("tableBody").innerHTML = table;
// }

// function updateStatus(id){
//   let studentArray = localStorage.getItem("students")
//     ? JSON.parse(localStorage.getItem("students"))
//     : [];
  
//   for(var i = 0; i < studentArray.length; i++){
//     if(studentArray[i].id === id){
//       if(studentArray[i].status === "Active"){
//         studentArray[i].status = "Inactive";
//       }else{
//         studentArray[i].status = "Active";
//       }
//       break;
//     }
//   }
  
//   localStorage.setItem("students", JSON.stringify(studentArray));
  
//   onload();
// }
let studentArray = [];

function returnToTablePage() {
  let queryString = "?students=" + encodeURIComponent(JSON.stringify(studentArray));
  window.location.href = "students-data.html" + queryString;
}

window.onload = function() {
  studentArray = localStorage.getItem("students")
    ? JSON.parse(localStorage.getItem("students"))
    : [];

  let table = "";
  studentArray.forEach(function(student) {
    table += "<tr>";
    if (student.status == "Active") {
      table += "<th id=" + student.id + "> " + "<label class='switch'>" + "<input type='checkbox' checked>" + "<span class='slider round'> </span>" + "</label>" + "</th>";
    } else {
      table += "<th id=" + student.id + "> " + "<label class='switch'>" + "<input type='checkbox'>" + "<span class='slider round'> </span>" + "</label>" + "</th>";
    }
    table += "<td>" + student.id + "</td>";
    table += "<td>" + student.name + "</td>";
    table += "<td>" + student.gpa + "</td>";
    table += "<td>" + student.level + "</td>";
    table += "<td> <button class='Edit-S' id='save' type='submit'><img class='edit_img_S' src='../photos/save.png'></button></td>";
    table += "</tr>";
  });

  document.getElementById("tableBody").innerHTML = table;
};

document.getElementById("tableBody").addEventListener("click", function(event) {
  if (event.target && event.target.id === "save") {
    let searchId = event.target.parentNode.parentNode.id;
    let statusCheckbox = event.target.parentNode.parentNode.querySelector("input[type='checkbox']");

    for (var i = 0; i < studentArray.length; i++) {
      if (studentArray[i].id === searchId) {
        if (statusCheckbox.checked) {
          console.log("active student");
          studentArray[i].status = "Active";
        } else {
          studentArray[i].status = "Inactive";
        }
        break;
      }
    }

    localStorage.setItem("students", JSON.stringify(studentArray));

    returnToTablePage();
  }
});



