// search = function () {
//     let searchId = document.getElementById("searchInput").value;
//     if (searchId) {
//         let form = document.createElement("form");
//         form.method = "post";
//         form.action = "";
//         let csrf_token = document.createElement("input");
//         csrf_token.type = "hidden";
//         csrf_token.name = "csrfmiddlewaretoken";
//         csrfToken.value = '{{ csrf_token }}';

//         var idInputField = document.createElement('input');
//         idInputField.type = 'hidden';
//         idInputField.name = 'id_input';
//         idInputField.value = idInput;

//         form.appendChild(csrfToken);
//         form.appendChild(idInputField);

//         document.body.appendChild(form);
//         form.submit();
//     }
// }
// document.getElementById('search_button').addEventListener('click', search);


function drop_down() {
        let table = '';
        //create dropdown list for department
        table += "<td>" + "<select id='dropDep' class='dropDep'>" +
            "<option value='IT'>Information Technology (IT)</option>" +
            "<option value='CS'>Computer Science (CS)</option>" +
            "<option value='IS'>Information System (IS)</option>" +
            "<option value='SE'>Artificial Intelligence (AI)</option>" +
            "<option value='DS'>Decision Support (DS)</option>" +
            "</select>" + "</td>";
        document.getElementById('drop_down').innerHTML = table;
}

function saveOption() {
    var selectedOption = document.getElementById('dropDep').value;
    var selectedOption2 = document.getElementById('sid').value;
    // Send the selected option to Django for saving

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/assign-department.html', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
    if (xhr.status === 200) {
        console.log('Option saved successfully.');
    } else {
        console.log('Error saving option.');
    }
    };
    xhr.send('selected_option=' + encodeURIComponent(selectedOption));
    xhr.send('selected_option=' + encodeURIComponent(selectedOption2));
}

    // function to get the selected department and store it in the studentArray when click on the saveDep button
    
// function saveDep() {
//     let searchId = document.getElementById("searchInput").value;
    
//     for (let i = 0; i < studentArray.length; i++) {
//         if (studentArray[i].id === searchId) {
//             studentArray[i].department = document.getElementById("dropDep").value;
//             localStorage.setItem("students", JSON.stringify(studentArray));
//         }
//     }
// }
//     // document.getElementById('saveDep').addEventListener('click', saveDep);
//     document.onclick = function() {saveDep()};
//     document.getElementById("searchButton").addEventListener("click", searchForStudent);
