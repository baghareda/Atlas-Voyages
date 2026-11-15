let nom = document.getElementById("name")
let email = document.getElementById("email")
let number = document.getElementById("number")
let message = document.getElementById("message")

let submit = document.getElementById("submit")
let result = document.getElementById("result")

let nameregex = /^[a-zA-z]/;
let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let numberregex = /^[0-9]/;
let messageregex = /^[a-zA-Z0-9.,!? ]+$/;

submit.addEventListener("click", function(){

    if (
            nameregex.test(nom.value) &&
            emailregex.test(email.value) &&
            numberregex.test(number.value) &&
            messageregex.test(message.value)
    ) {
        result.textContent = "form sent ok"


    } else {
        result.textContent  = "error form not respected"
    }

})

