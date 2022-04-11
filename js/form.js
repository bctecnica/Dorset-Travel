// function ValidateEmail(inputText)
// {
// form sent popup and clears fields after validation
var popup = document.getElementById("snackbar");
const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    $("#formModal").modal('hide');
    popup.className = "show";
    setTimeout(function(){ popup.className = popup.className.replace("show", ""); }, 4500);
})
