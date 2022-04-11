// function ValidateEmail(inputText)
// {
//     console.log(inputText)
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(inputText.value.match(mailformat))
// {
// alert("Valid email address!");
// document.form1.text1.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.form1.text1.focus();
// return false;
// }
// }


// if all ok then show send email animation

// const name = document.getElementById("name");
// const email = document.getElementById("mail");
// const subject = document.getElementById("subject");
// const message = document.getElementById("message");
const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    $("#formModal").modal('hide');
    console.log("clicked");
})
