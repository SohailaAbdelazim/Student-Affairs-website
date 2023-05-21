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
        table += "<td>" + "<select id='dropDep' class='dropDep' name='drop-dep'>" +
            "<option value='IT'>Information Technology (IT)</option>" +
            "<option value='CS'>Computer Science (CS)</option>" +
            "<option value='IS'>Information System (IS)</option>" +
            "<option value='AI'>Artificial Intelligence (AI)</option>" +
            "<option value='DS'>Decision Support (DS)</option>" +
            "</select>" + "</td>";
        document.getElementById('drop_down').innerHTML = table;
}

function saveOption() {
    var selectedOption = document.getElementById('dropDep').value;
    var selectedOption2 = document.getElementById('sid').innerHTML;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/update-department/', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Include the CSRF token in the request header
    xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));

    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('Department updated successfully!');
    } else {
        console.error('Error updating department:', xhr.status);
    }
    };
    // xhr.send('department=' + encodeURIComponent(selectedOption));
    xhr.send('drop-dep=' + encodeURIComponent(selectedOption) + '&student-id=' + encodeURIComponent(selectedOption2));
    
}

  // Function to retrieve the CSRF token cookie
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
