let form = document.querySelector('#signUpForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // //validate signUp form
    var SignUpFullName = document.forms["signUpForm"]["signUpFullName"].value;
    var SignUpEmail = document.forms["signUpForm"]["signUpEmail"].value;
    var SignUpPassword = document.forms["signUpForm"]["signUpPassword"].value;
    var SignUpConfirmPassword = document.forms["signUpForm"]["confirmPassword"].value;
    if (SignUpFullName === "" || SignUpFullName === null) {
        let errorName = document.getElementById("errorSignUpMessage");
        errorName.innerHTML = "Your Full name is required";
        errorName.classList.add("error__message");
        return false;
    } else if (SignUpEmail === "" || SignUpEmail === null) {
        let errorName = document.getElementById("errorSignUpMessage");
        errorName.innerHTML = "Your Email is required is required";
        errorName.classList.add("error__message");
        return false;
    } else if (SignUpPassword.length <= 3 || SignUpPassword.length > 8) {
        let errorName = document.getElementById("errorSignUpMessage");
        errorName.innerHTML = "Password should not be less than three or greater than eight characters";
        errorName.classList.add("error__message");
        return false;
    } else if (SignUpConfirmPassword !== SignUpPassword) {
        let errorName = document.getElementById("errorSignUpMessage");
        errorName.innerHTML = "Password not match";
        errorName.classList.add("error__message");

        return false;
    } else {
        let notification = document.querySelector("#errorSignUpMessage");
        notification.classList.add("alert__message");
        notification.textContent = "Your message has been sent thank you.";
        //save message into fire base
        setTimeout(() => {
            window.location.reload();
        }, 3000);

    }
});