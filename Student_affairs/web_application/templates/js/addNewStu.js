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
console.log(student);
localStorage.setItem("students", JSON.stringify(studentArray));
}

