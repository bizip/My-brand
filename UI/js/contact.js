let form = document.querySelector("#form__contact");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.forms["myForm"]["name1"].value;
    let email = document.forms["myForm"]["email1"].value;
    let subject = document.forms["myForm"]["subject1"].value;
    let message = document.forms["myForm"]["textarea"].value;
    if (name === "" || name === null) {
        let errorName = document.getElementById("error__message");
        errorName.innerHTML = "Your full name is required";
        errorName.classList.add("error__message");
        return false;
    } else if (email === "" || email === null) {
        let errorEmail = document.getElementById("error__message");
        errorEmail.innerHTML = "Your email is required";
        errorEmail.classList.add("error__message");

        return false;
    } else if (subject === "" || subject === null) {
        let errorSub = document.getElementById("error__message");
        errorSub.innerHTML = "You need to write subject for your message";
        errorSub.classList.add("error__message");
        return false;
    } else if (message === "" || message === null) {
        let errorMessage = document.getElementById("error__message");
        errorMessage.innerHTML = "Please type your message";
        errorMessage.classList.add("error__message");
        return false;
    } else {
        let notification = document.querySelector("#error__message");
        notification.classList.add("alert__message");
        notification.textContent = "Your message has been sent thank you.";
        //save message into fire base
        db.collection("messages").add({
            fullName: form.fullName.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.textarea.value
        }).then(() => {
            window.location.reload();
        });

    }
});