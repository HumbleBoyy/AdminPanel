let elLoginForm = document.querySelector(".login_form")

elLoginForm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const data = {
        username: e.target.username.value,
        password: e.target.password.value
    }

    console.log(data)
})