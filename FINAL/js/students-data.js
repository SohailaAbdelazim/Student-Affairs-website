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
