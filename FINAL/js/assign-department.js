onload= function () {
 function searchForStudent() {
     let searchId = document.getElementById("searchInput").value;
     let studentArray = localStorage.getItem("students")
             ? JSON.parse(localStorage.getItem("students"))
             : [];

         let table = '';

         for (let i = 0; i < studentArray.length; i++) {
             if (studentArray[i].id === searchId) {
                 console.log(searchId);
                 if (studentArray[i].level < 3) {
                     studentArray[i].department = "General";
                     table += "<tr>";
                     table += "<td>" + studentArray[i].id + "</td>";
                     table += "<td>" + studentArray[i].name + "</td>";
                     table += "<td>" + studentArray[i].gpa + "</td>";
                     table += "<td>" + studentArray[i].level + "</td>";
                     table += "<td>" + studentArray[i].department + "</td>";
                     table += "</tr>";
                     console.log(searchId);
                 } else {
                     table += "<tr>";
                     table += "<td>" + studentArray[i].id + "</td>";
                     table += "<td>" + studentArray[i].name + "</td>";
                     table += "<td>" + studentArray[i].gpa + "</td>";
                     table += "<td>" + studentArray[i].level + "</td>";
                     //create dropdown list for department
                     table += "<td>" + "<select id='dropDep' class='dropDep'>" +
                         "<option value='General'>General</option>" +
                         "<option value='IT'>Information Technology (IT)</option>" +
                         "<option value='CS'>Computer Science (CS)</option>" +
                         "<option value='IS'>Information System (IS)</option>" +
                         "<option value='SE'>Artificial Intelligence (AI)</option>" +
                         "<option value='DS'>Decision Support (DS)</option>" +
                         "</select>" + "</td>";
                     table += "</tr>";
                 }

             }
        }
     document.getElementById('tbody').innerHTML = table;

 }

 document.getElementById("searchButton").addEventListener("click", searchForStudent);
}