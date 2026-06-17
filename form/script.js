const validateForm = (event) => {
    event.preventDefault();
    let username = event.target.username
    let password = event.target.password
    let error = document.getElementById("error")
    username.style.borderColor = "";
    password.style.borderColor = "";
    error.innerHTML = "";
    if (username.value === "" && password.value === "") {
        error.innerHTML = "please enter username and password"
        username.style.borderColor = "red"
        password.style.borderColor = "red"
    }
    else if (username.value === "") {
        error.innerHTML = "please enter username"
        username.style.borderColor = "red"
    }
    else if (password.value === "") {
        error.innerHTML = "please enter password"

        password.style.borderColor = "red"
    }
}