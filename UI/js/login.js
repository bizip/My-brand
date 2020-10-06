// validate login form
let form = document.getElementById("LoginForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    var loginEmail = document.forms["LoginForm"]["loginEmail"].value;
    var loginPassword = document.forms["LoginForm"]["loginPassword"].value;
    if (loginEmail === "" || loginEmail === null) {
        let errorName = document.getElementById("errorLoginMessage");
        errorName.innerHTML = "Your email is required";
        errorName.classList.add("error__message");
        return false;
    } else if (loginPassword.length <= 3 || loginPassword.length > 8) {
        let errorName = document.getElementById("errorLoginMessage");
        errorName.innerHTML = "Password should not be less than three or greater than eight";
        errorName.classList.add("error__message");
        return false;
    } else {
        let notification = document.querySelector("#errorLoginMessage");
        notification.classList.add("alert__message");
        notification.textContent = "Your message has been sent thank you.";
        //save message into fire base
        setTimeout(() => {
            window.location.reload();
        }, 3000);

    }
});