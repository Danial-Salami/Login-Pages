const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const verify = document.getElementById("verify")


form.addEventListener("submit", e => {
    e.preventDefault();
    checkInputs();
})

const setSuccess = (input) => {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")
    small.innerText = ""


    formControl.className = "form-control success"
}
const setError = (input, msg) => {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")

    formControl.className = "form-control error"
    small.innerText = msg
}
const checkInputs = () => {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const verifyValue = verify.value.trim()


    if (usernameValue === "") {
        setError(username, "نام کاربری را وارد کنید")
    } else {
        setSuccess(username)
    }
    if (emailValue === "") {
        setError(email, "ایمیل  را وارد کنید")
    } else {
        setSuccess(email)
    }
    if (passwordValue === "") {
        setError(password, "رمز عبور  را وارد کنید")
    } else if (passwordValue.length < 8) {
        setError(password, "رمز عبور  باید بیش از 7 حرف باشد  ")
    } else {
        setSuccess(password)
    }
    if (verifyValue === "") {
        setError(verify, "رمز عبور  را وارد کنید")
    } else if (verifyValue !== passwordValue) {
        setError(verify, "رمز عبور رمز عبور اشتباه وارد شده است ")
    } else {
        setSuccess(verify)
    }
}