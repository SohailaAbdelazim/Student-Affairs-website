function returnToTablePage(){
// this 2 lines let him back to the student table when clicl on save
let queryString = "?students=" + encodeURIComponent(JSON.stringify(studentArray));
window.location.href = "students-data.html" + queryString;
}

function myFunction() {
    confirm("Are you sure you want to delete the student record? ");
}

function gpaNotValid(){
    confirm("GPA is not valid");
}
let searchId;
window.onload = function (){
    const querystring = window.location.search;
    const itemSearch = new URLSearchParams(querystring); 
    searchId = itemSearch.get('id'); 
    saveInfoInPage(searchId);
}

let studentArray = localStorage.getItem("students")
    ? JSON.parse(localStorage.getItem("students"))
    : [];

let student = {
    id: document.getElementById("studentId"),
    name: document.getElementById("studentName"),
    date: document.getElementById("studentDate"),
    gpa: document.getElementById("studentGpa"),
    gender: document.getElementById("studentGender"),
    level: document.getElementById("studentLevel"),
    status: document.getElementById("studentStatus"),
    email: document.getElementById("studentEmail"),
    phone: document.getElementById("studentPhone"),
    departement: document.getElementById("departement"),
};

// fill the info in edit page
function saveInfoInPage(searchId){
    for(var i = 0 ; i< studentArray.length; i++ ){
        if(studentArray[i].id === searchId){ 
            // set level
            let level = studentArray[i].level;
            student.level.selectedIndex = level - 1;

            // set info for student
            student.name.value = studentArray[i].name;
            student.date.value = studentArray[i].date;
            student.gpa.value = studentArray[i].gpa;
            student.email.value = studentArray[i].email;
            student.phone.value = studentArray[i].phone;

            // set gender in edit page
            if(studentArray[i].gender === "Male"){
                student.gender.querySelector("#male").checked = true;
            }else {
                student.gender.querySelector("#female").checked = true;
            }

            // set status in edit page
            if(studentArray[i].status === "Active"){
                student.status.querySelector("#active").checked = true;
            }else {
                student.status.querySelector("#inactive").checked = true;
            }

            student.departement.value = studentArray[i].department; // will displayed when set departement
        }
    }
}


// save function
let saveButton = document.getElementById("save");
saveButton.addEventListener("click", function() {

let levelSelect = document.getElementById("studentLevel");

// update info of the student in tabel
for(var i = 0 ; i< studentArray.length; i++ ){
    if(studentArray[i].id === searchId){
        let gpa = document.getElementById("studentGpa").value;
        if(gpa <=4 && gpa >=0){
            studentArray[i].gpa = gpa
        } else{
            gpaNotValid();
        }
        studentArray[i].level = parseInt(levelSelect.value);
        studentArray[i].name = document.getElementById("studentName").value;
        studentArray[i].date = document.getElementById("studentDate").value;
        studentArray[i].email = document.getElementById("studentEmail").value;
        studentArray[i].phone = document.getElementById("studentPhone").value;

        if(student.gender.querySelector("#male").checked){
            studentArray[i].gender = "Male";
        } else {
            studentArray[i].gender = "Female";
        }
        // update status
        if(student.status.querySelector("#active").checked){
            studentArray[i].status = "Active";
        } else {
            studentArray[i].status = "Inactive";
        }
    }
}
// set the new data
localStorage.setItem("students", JSON.stringify(studentArray));
// return to table page
returnToTablePage();
});

// delete but not work for now
// let deleteButton = document.getElementById("delete");
// deleteButton.addEventListener("click", function() {
//         for (let i = 0; i < studentArray.length; i++) {
//             if (studentArray[i].id === searchId) {
//                 let content = localStorage.getItem(studentArray[i]);
//                 localStorage.removeItem("students", JSON.stringify(studentArray));
//                 this.localStorage.removeItem(content);

//                 break;
//             }
//         }
//     localStorage.removeItem("students", JSON.stringify(studentArray));
//     returnToTablePage();
// });
