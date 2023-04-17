onload = function() {
let studentArray = localStorage.getItem("students")
  ? JSON.parse(localStorage.getItem("students"))
  : [];


let table = "";
studentArray.forEach(function(student) {
  table += "<tr>";
  if(student.status == "Active"){
    table += "<th  id='student.id'> " + "<label class='switch'>" + "<input type='checkbox' checked>" + "<span class='slider round'> </span>" + "</label>" + "</th>";
  }else{
    table += "<th  id='student.id'> " + "<label class='switch'>" + "<input type='checkbox'>" + "<span class='slider round'> </span>" + "</label>" + "</th>";
  }
  table += "<td>" + student.id + "</td>";
  table += "<td>" + student.name + "</td>";
  table += "<td>" + student.gpa + "</td>";
  table += "<td>" + student.level + "</td>";
  table += "</tr>";
});

document.getElementById("tableBody").innerHTML = table;
}
